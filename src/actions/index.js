import axios from 'axios';
import { LOG_IN, LOG_OUT, ERROR } from './actionTypes';

const API = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

function isValidCredentials(response) {
  return response.status === 'ok';
}

function errorHandler(error) {
  const { status, message } = error;
  let errMsg = '';
  if (status === 404) {
    errMsg = 'Сервер временно недоступен';
  } else if (status === 'err' && message === 'wrong_email_or_password') {
    errMsg = 'Имя пользователя или пароль введены не верно';
  } else if (status === 'err' && message === 'user_not_found') {
    errMsg = 'Пользователь не найден';
  }

  return {
    type: ERROR,
    payload: { errMsg },
    error: true,
  };
}

export function logIn(credentials, cb) {
  return (dispatch) => {
    axios.post(`${API}/validate`, credentials)
      .then(({ data }) => {
        if (isValidCredentials(data)) {
          dispatch({
            type: LOG_IN,
            payload: { email: credentials.email },
          });
          cb();
        } else {
          dispatch(errorHandler(data));
          cb();
        }
      })
      .catch((error) => {
        dispatch(errorHandler(error.response));
        cb();
      });
  };
}

export function logOut() {
  return { type: LOG_OUT };
}

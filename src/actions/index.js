import axios from 'axios';
import { LOG_IN, LOG_OUT, ERROR } from './actionTypes';

const API = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

function isValidCredentials(credentials) {
  if (credentials.email.toLowerCase() !== 'admin' || credentials.password !== '12345') return false;
  return true;
}

export function logIn(credentials, cb) {
  return (dispatch) => {
    axios.post(`${API}/validate`, credentials)
      .then(({ data }) => console.log(data));
    if (isValidCredentials(credentials)) {
      dispatch({
        type: LOG_IN,
        payload: { name: credentials.email },
      });
      cb();
    } else {
      dispatch({
        type: ERROR,
        payload: { errMsg: 'Имя пользователя или пароль введены не верно' },
        error: true,
      });
    }
  };
}

export function logOut() {
  return { type: LOG_OUT };
}

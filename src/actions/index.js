import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
  ERROR,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL,
} from './actionTypes';

const API = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

function isValidCredentials(res) {
  return res.status === 'ok';
}

function errorHandler(error, errorType) {
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
    type: errorType,
    payload: { errMsg },
    error: true,
  };
}

export function logIn(credentials, cb) {
  return (dispatch) => {
    dispatch({ type: LOG_IN_REQUEST });
    axios.post(`${API}/validate`, credentials)
      .then(({ data }) => {
        if (isValidCredentials(data)) {
          dispatch({
            type: LOG_IN_SUCCESS,
            payload: { email: credentials.email, id: data.data.id },
          });
          cb();
        } else {
          dispatch(errorHandler(data, ERROR));
          cb();
        }
      })
      .catch((error) => {
        dispatch(errorHandler(error.response, ERROR));
        cb();
      });
  };
}

export function logOut() {
  return { type: LOG_OUT };
}

export function getProfile(id) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API}/user-info/${id}`);
      if (isValidCredentials(res.data)) {
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: res.data.data,
        });
      } else {
        dispatch(errorHandler(res.data, GET_PROFILE_FAIL));
      }
    } catch (error) {
      dispatch(errorHandler(error.response, GET_PROFILE_FAIL));
    }
  };
}

export function getNews() {
  return (dispatch) => {
    dispatch({ type: GET_NEWS_REQUEST });
    axios.get(`${API}/news`)
      .then((res) => {
        if (isValidCredentials(res.data)) {
          dispatch({
            type: GET_NEWS_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch(errorHandler(res.data, GET_NEWS_FAIL));
        }
      })
      .catch((error) => {
        dispatch(errorHandler(error.response, GET_NEWS_FAIL));
      });
  };
}

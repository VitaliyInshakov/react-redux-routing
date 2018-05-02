import { LOG_IN, LOG_OUT, ERROR } from './actionTypes';

function isValidCredentials(data) {
  if (data.login.toLowerCase() !== 'admin' || data.password !== '12345') return false;
  return true;
}

export function logIn(data, cb) {
  return (dispatch) => {
    if (isValidCredentials(data)) {
      dispatch({
        type: LOG_IN,
        payload: { name: data.username },
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

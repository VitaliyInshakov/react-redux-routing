import axios from 'axios';
import { LOG_IN, LOG_OUT, ERROR } from './actionTypes';

const API = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

function isValidCredentials(response) {
  return response.status === 'ok';
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
					dispatch({
						type: ERROR,
						payload: { errMsg: data.message },
						error: true,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: ERROR,
					payload: { errMsg: 'Сервер временно недоступен' },
					error: true,
				});
			});
  };
}

export function logOut() {
  return { type: LOG_OUT };
}

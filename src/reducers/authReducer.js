import { LOG_IN, LOG_OUT, ERROR } from '../actions/actionTypes';

const initialState = {
  user: null,
  errMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, user: { name: action.payload.name }, errMsg: '' };
    case LOG_OUT:
      return { ...state, user: null, errMsg: '' };
    case ERROR:
      return { ...state, errMsg: action.payload.errMsg };
    default:
      return state;
  }
};

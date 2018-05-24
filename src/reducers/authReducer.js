import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
  ERROR,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from '../actions/actionTypes';

const initialState = {
  user: null,
  errMsg: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, isLoading: true, errMsg: '' };
    case LOG_IN_SUCCESS:
      return { ...state, user: action.payload, isLoading: false, errMsg: '' };
    case LOG_OUT:
      return { ...state, user: null, isLoading: false, errMsg: '' };
    case ERROR:
      return { ...state, errMsg: action.payload.errMsg };
    case GET_PROFILE_SUCCESS:
      return { ...state, user: { ...state.user, data: action.payload } };
    case GET_PROFILE_FAIL:
      return { ...state, errMsg: action.payload.errMsg };
    default:
      return state;
  }
};

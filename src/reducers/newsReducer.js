import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL,
} from '../actions/actionTypes';

const initialState = {
  data: null,
  errMsg: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return { ...state, isLoading: true, errMsg: '' };
    case GET_NEWS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, errMsg: '' };
    case GET_NEWS_FAIL:
      return { ...state, errMsg: action.payload.errMsg };
    default:
      return state;
  }
};

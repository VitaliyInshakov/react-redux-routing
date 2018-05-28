import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import newsReducer from './newsReducer';

const reducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  news: newsReducer,
});

export default reducer;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';

const reducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
});

export default reducer;

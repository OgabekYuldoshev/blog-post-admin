import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import history from '../services/history';

import * as AuthModule from '../modules/auth';


const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: AuthModule.Reducer
});

export default rootReducer;

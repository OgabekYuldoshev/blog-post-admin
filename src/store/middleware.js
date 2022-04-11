import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import {createLogger} from 'redux-logger'

import history from "../services/history";

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  middleware.push(createLogger());
}

export default middleware;

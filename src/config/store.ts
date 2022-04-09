import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer, { IRootState } from 'shared/reducers';
import errorMiddleware from './error-middleware';
import notificationMiddleware from './notification-middleware';
import loggerMiddleware from './logger-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultMiddlewares = [
  thunkMiddleware,
  promiseMiddleware,
  // FIXME - 잘 사용하지 않는 미들웨어 사용중지 (추후 다시 사용여부 검토)
  // errorMiddleware,
  // notificationMiddleware,
  // loadingBarMiddleware(),
  // loggerMiddleware,
];

const composedMiddlewares = middlewares =>
  process.env.NODE_ENV === 'development' && !!composeWithDevTools && !!composeWithDevTools()
    ? compose(applyMiddleware(...defaultMiddlewares, ...middlewares), composeWithDevTools())
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?: IRootState, middlewares = []) => createStore(reducer, initialState, composedMiddlewares(middlewares));

export default initialize;

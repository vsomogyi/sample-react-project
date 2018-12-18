import makeRootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { createLogger } from 'redux-logger';

export default (initialState = {}) => {
  const logger = createLogger({
    collapsed: true,
    diff: false,
    duration: true,
  });

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware, logger];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

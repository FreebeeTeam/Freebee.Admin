import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from './middlewares';

import appReducer from './appReducer';

export default () => {
  const middleware = applyMiddleware(
    thunk,
  );

  const composeEnhancers = composeWithDevTools({});
  const enhancer = composeEnhancers(
    middleware,
  );

  const store = createStore(appReducer, enhancer);

  return store;
};

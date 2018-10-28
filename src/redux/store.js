import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';


export default () => {
  const middleware = applyMiddleware(
    thunk,
  );

  const composeEnhancers = composeWithDevTools({});
  const enhancer = composeEnhancers(
    middleware,
  );

  const store = createStore(rootReducer, enhancer);

  return store;
};

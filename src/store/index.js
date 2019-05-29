import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from './middlewares/logger';

const middleware = [logger];

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default Store;

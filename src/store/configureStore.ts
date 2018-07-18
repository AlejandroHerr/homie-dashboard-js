import { createStore, applyMiddleware, compose } from 'redux';
import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';

interface WindowWithReduxDevTools extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: ({}) => any;
}

export default function configureStore(history: History) {
  const middlewares = [routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as WindowWithReduxDevTools).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as WindowWithReduxDevTools).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
        })
      : compose;

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  return store;
}

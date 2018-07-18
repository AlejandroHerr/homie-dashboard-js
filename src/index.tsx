import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import App from './App';
import 'sanitize.css/sanitize.css';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('index'),
);

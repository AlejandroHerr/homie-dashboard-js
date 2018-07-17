import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Main from './container/Main';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/" component={NotFoundPage} />
  </Switch>
);

export default hot(module)(App);

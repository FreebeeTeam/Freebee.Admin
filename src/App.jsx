import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  CssBaseline,
} from '@material-ui/core';
import AppBar from './views/appbar';
import { createStore } from './redux';
import { dashboard } from './routes';

import './App.css';

const Dashboard = () => (
  <Fragment>
    <CssBaseline />
    <AppBar />
  </Fragment>
);

const App = () => {
  return (
    <Fragment>
      <Provider store={createStore()}>
        <Router>
          <Switch>
            <Route path={dashboard()} component={Dashboard} />
            <Redirect to={dashboard()} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;

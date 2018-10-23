import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Header } from './components';
import FeedbackManagement from './pages/feedback-management';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={FeedbackManagement} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
};

export default App;

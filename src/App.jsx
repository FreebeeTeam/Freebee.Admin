import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from './redux';

import Routing from './routes';

import './App.css';

const App = () => {
  return (
    <>
      <Provider store={createStore()}>
        <Router>
          <Routing />
        </Router>
      </Provider>
    </>
  );
};

export default App;

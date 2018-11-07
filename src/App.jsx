import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// for marker icons fix
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { createStore } from './redux';

import Routing from './routes';

import './App.css';

// for marker icons fix
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
// for marker icons fix
L.Marker.prototype.options.icon = DefaultIcon;


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

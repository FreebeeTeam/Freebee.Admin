import React from 'react';
import { Marker } from 'react-leaflet';
import defaultIcon from './icon';

export default ({ position, children }) => {
  return (
    <Marker
      icon={defaultIcon}
      position={position}
    >
      {children}
    </Marker>
  );
};

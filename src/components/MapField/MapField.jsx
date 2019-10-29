import React from 'react';
import { Map, Popup, TileLayer } from 'react-leaflet';
import { MapMarker } from 'components';
import { INITIAL_POSITION, INITIAL_ZOOM } from '../../config/geolocation';
import useStyles from './styles';

export default function MapField({ onChange, value }) {
  const classes = useStyles();

  const onLocationChange = (e) => {
    const { latlng: { lat, lng } } = e;
    const location = [lat, lng];
    onChange(location);
  };

  return (
    <Map
      center={INITIAL_POSITION}
      zoom={INITIAL_ZOOM}
      className={classes.map}
      onDblClick={onLocationChange}
      doubleClickZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {value && (
      <MapMarker position={value}>
        <Popup>New marker</Popup>
      </MapMarker>
      )}
    </Map>
  );
}

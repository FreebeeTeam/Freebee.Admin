import React from 'react';
import { Map, Popup, TileLayer } from 'react-leaflet';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  Grid,
  withStyles,
} from '@material-ui/core';
import { Marker } from '../../../components';
import { INITIAL_ZOOM, INITIAL_POSITION } from '../../../config/geolocation';

import styles from './styles';

const AddDialog = (props) => {
  const {
    isOpen,
    entity,
    close,
    classes,
    handleSubmit,
    handleChange,
    handleCoordinatesChange,
  } = props;

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle> Create marker </DialogTitle>
      <DialogContent>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              required
              onChange={handleChange('title')}
              id="created-title"
              label="Title"
              value={entity.title}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              onChange={handleChange('address')}
              id="created-address"
              label="Address"
              value={entity.address}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange('author')}
              id="created-author"
              label="Author"
              value={entity.author}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange('password')}
              id="created-password"
              label="Password"
              value={entity.password}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange('description')}
              multiline
              id="created-description"
              label="Description"
              value={entity.description}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Map
              center={INITIAL_POSITION}
              zoom={INITIAL_ZOOM}
              className={classes.map}
              onDblClick={handleCoordinatesChange}
              doubleClickZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {entity.location && (
                <Marker position={entity.location}>
                  <Popup>New marker</Popup>
                </Marker>
              )}
            </Map>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={close}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(AddDialog);

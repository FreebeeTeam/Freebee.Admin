import React from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
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
import { INITIAL_ZOOM, INITIAL_POSITION } from '../../../config/geolocation';

import styles from './styles';

const EditDialog = (props) => {
  const {
    isOpen,
    feedback,
    handleClose,
    classes,
    handleSubmit,
    handleChange,
    handleCoordinatesChange,
  } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle> Edit feedback </DialogTitle>
      <DialogContent>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              required
              onChange={handleChange('title')}
              id="created-title"
              label="Title"
              value={feedback.title}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              onChange={handleChange('address')}
              id="created-address"
              label="Address"
              value={feedback.address}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange('author')}
              id="created-author"
              label="Author"
              value={feedback.author}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange('type')}
              id="created-author"
              label="Type"
              value={feedback.type}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange('password')}
              id="created-password"
              label="Password"
              value={feedback.password}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange('description')}
              id="created-description"
              label="Description"
              value={feedback.description}
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
              {feedback.location && (
                <Marker position={feedback.location}>
                  <Popup>New marker</Popup>
                </Marker>
              )}
            </Map>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(EditDialog);

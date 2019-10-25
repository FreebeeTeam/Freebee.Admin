import React from 'react';
import { Map, Popup, TileLayer } from 'react-leaflet';
import { Form, Formik } from 'formik';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField,
} from '@material-ui/core';
import { FreeOpportunityTypeDropdown, MapMarker } from 'components';
import { INITIAL_POSITION, INITIAL_ZOOM } from 'config/geolocation';
import useStyles from './styles';

const EditDialog = (props) => {
  const {
    isOpen,
    feedback,
    markerTypes,
    onApprove,
    onDecline,
    onClose,
    onChange,
    onCoordinatesChange,
  } = props;

  const classes = useStyles();

  return (
    <Formik
      initialValues={{ ...feedback }}
      render={({
        errors, status, touched, isSubmitting,
      }) => {
        return (
          <Form>
            <Dialog open={isOpen} onClose={onClose}>

              <DialogTitle> Edit feedback </DialogTitle>

              <DialogContent>
                <Grid container spacing={24}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      onChange={onChange('title')}
                      id="created-title"
                      label="Title"
                      value={feedback.title}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      required
                      onChange={onChange('address')}
                      id="created-address"
                      label="Address"
                      value={feedback.address}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      onChange={onChange('author')}
                      id="created-author"
                      label="Author"
                      value={feedback.author}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FreeOpportunityTypeDropdown
                      onChange={onChange('type')}
                      value={feedback.type}
                      types={markerTypes}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      onChange={onChange('password')}
                      id="created-password"
                      label="Password"
                      value={feedback.password}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      onChange={onChange('description')}
                      id="created-description"
                      label="Description"
                      multiline
                      value={feedback.description}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Map
                      center={INITIAL_POSITION}
                      zoom={INITIAL_ZOOM}
                      className={classes.map}
                      onDblClick={onCoordinatesChange}
                      doubleClickZoom={false}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                      />
                      {feedback.location && (
                      <MapMarker position={feedback.location}>
                        <Popup>New marker</Popup>
                      </MapMarker>
                      )}
                    </Map>
                  </Grid>

                </Grid>
              </DialogContent>

              <DialogActions>
                <Button color="primary" onClick={onDecline}>Decline</Button>
                <Button color="secondary" onClick={onApprove}>Approve</Button>
              </DialogActions>

            </Dialog>
          </Form>
        );
      }}
    />
  );
};

export default EditDialog;

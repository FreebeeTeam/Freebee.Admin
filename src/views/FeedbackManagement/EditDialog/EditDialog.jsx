import React from 'react';
import { useFormik } from 'formik';
import {
  Grid, TextField,
} from '@material-ui/core';
import { Dropdown, MapField, Dialog as EditDialog } from 'components';
import { feedbackValidationSchema } from './helpers';

export default function (props) {
  const {
    title,
    isOpen,
    feedback,
    markerTypes,
    onSubmit,
    onReset,
    onClose,
  } = props;

  const {
    handleSubmit, handleReset, handleChange, handleBlur,
    setFieldValue,
    errors, touched, values,
  } = useFormik({
    initialValues: {
      title: '',
      address: '',
      author: '',
      ...feedback,
    },
    validationSchema: feedbackValidationSchema,
    onSubmit: (formValues) => {
      onSubmit(formValues);
    },
    onReset: ({ id }) => {
      onReset(id);
    },
  });

  const handleLocationChange = (location) => {
    setFieldValue('location', location);
  };

  return (
    <EditDialog
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            id="title"
            name="title"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            label={errors.title || 'Title'}
            value={values.title}
            error={!!errors.title && touched.title}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="address"
            name="address"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.address && touched.address}
            label={errors.address || 'Address'}
            value={values.address}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="author"
            name="author"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.author && touched.author}
            label={errors.author || 'Author'}
            value={values.author}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <Dropdown
            title="Marker type"
            name="type"
            onChange={handleChange}
            value={values.type}
            items={markerTypes}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.password && touched.password}
            label={errors.password || 'Password'}
            value={values.password}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.description && touched.description}
            label={errors.description || 'Description'}
            value={values.description}
            fullWidth
            multiline
          />
        </Grid>

        <Grid item xs={12}>
          <MapField
            name="location"
            onChange={handleLocationChange}
            value={values.location}
          />
        </Grid>

      </Grid>
    </EditDialog>
  );
}

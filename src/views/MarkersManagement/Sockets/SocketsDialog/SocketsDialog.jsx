import React from 'react';
import {
  Grid,
  TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { MapField, Dialog as EditDialog } from 'components';
import { socketValidationSchema } from './helpers';

export default function ({
  title,
  isOpen,
  socket = {},
  onClose,
  onSubmit,
  onReset,
}) {
  const {
    handleSubmit, handleReset, handleChange, handleBlur,
    setFieldValue,
    errors, touched, values,
  } = useFormik({
    initialValues: {
      title: '',
      address: '',
      author: '',
      description: '',
      ...socket,
    },
    validationSchema: socketValidationSchema,
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
      resetLabel="Cancel"
      submitLabel="Submit"
    >
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            id="title"
            name="title"
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

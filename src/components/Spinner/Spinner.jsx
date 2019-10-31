import React from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';

export default function Spinner({ size }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={size} />
    </div>
  );
}

Spinner.defaultProps = {
  size: 150,
};

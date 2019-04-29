import React from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';
import styles from './styles';

const Spinner = ({ classes, size }) => {
  return (
    <div className={classes.root}>
      <CircularProgress size={size} />
    </div>
  );
};

Spinner.defaultProps = {
  size: 150,
};

export default withStyles(styles)(Spinner);

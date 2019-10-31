import React from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
} from '@material-ui/core';
import useStyles from './styles';

export default function ({
  children,
  title,
  isOpen, onClose,
  onSubmit, onReset,
  resetLabel = 'Cancel', submitLabel = 'Submit',
}) {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <form className={classes.form} onSubmit={onSubmit} onReset={onReset}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent classes={{ root: classes.content }}>
          {children}
        </DialogContent>

        <DialogActions>
          <Button color="primary" type="reset" onClick={onReset}>{resetLabel}</Button>
          <Button color="secondary" type="submit" onClick={onSubmit}>{submitLabel}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

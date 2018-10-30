import React, { PureComponent } from 'react';
import {
  withStyles,
  Typography,
  Grid,
} from '@material-ui/core';
import Table from '../feedback-table';

import styles from './styles';

class FeedbackManagement extends PureComponent {
  render() {
    const { classes, data, removeRows } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3">
              {'Feedback managing'}
            </Typography>
            <Table data={data} removeRows={removeRows} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FeedbackManagement);

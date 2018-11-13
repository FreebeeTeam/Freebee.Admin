import React, { PureComponent } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import FeedbackTable from './feedback-table';

import styles from './styles';

class FeedbackManagement extends PureComponent {
  render() {
    const { classes, data, removeRows, deleteFeedback } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <FeedbackTable data={data} deleteFeedback={deleteFeedback} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FeedbackManagement);

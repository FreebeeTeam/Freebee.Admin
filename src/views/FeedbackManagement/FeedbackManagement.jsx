import React, { PureComponent } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import FeedbackTable from './FeedbackTable';
import EditDialog from './EditDialog';

import styles from './styles';

class FeedbackManagement extends PureComponent {
  render() {
    const {
      classes,
      data,
      isOpen,
      handleOpen,
      handleClose,
      deleteFeedback,
      setFeedbackToEdit,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <FeedbackTable
              setFeedbackToEdit={setFeedbackToEdit}
              data={data}
              handleOpen={handleOpen}
              deleteFeedback={deleteFeedback}
            />
          </Grid>
        </Grid>
        <EditDialog isOpen={isOpen} handleClose={handleClose} />
      </div>
    );
  }
}

export default withStyles(styles)(FeedbackManagement);

import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
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
        <FeedbackTable
          setFeedbackToEdit={setFeedbackToEdit}
          data={data}
          handleOpen={handleOpen}
          deleteFeedback={deleteFeedback}
        />
        <EditDialog isOpen={isOpen} handleClose={handleClose} />
      </div>
    );
  }
}

export default withStyles(styles)(FeedbackManagement);

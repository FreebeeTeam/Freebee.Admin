import React, { useState } from 'react';
import FeedbackTable from './FeedbackTable';
import EditDialog from './EditDialog';
import useStyles from './styles';

export default function FeedbackManagement({
  data,
  deleteFeedback,
  setFeedbackToEdit,
}) {
  const classes = useStyles();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className={classes.root}>
      <FeedbackTable
        setFeedbackToEdit={setFeedbackToEdit}
        data={data}
        onDialogOpen={handleDialogOpen}
        deleteFeedback={deleteFeedback}
      />
      <EditDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
      />
    </div>
  );
}

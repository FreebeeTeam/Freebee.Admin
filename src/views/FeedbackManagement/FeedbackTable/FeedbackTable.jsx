import React from 'react';
import { InfoRounded as InfoRoundedIcon } from '@material-ui/icons';
import { Table } from 'components';
import { columns } from './columns';

export default function FeedbackTable({
  setFeedbackToEdit, onDialogOpen, data, deleteFeedback,
}) {
  const handleActionButtonClick = (id) => {
    setFeedbackToEdit(id);
    onDialogOpen();
  };

  return (
    <Table
      title="Feedback"
      data={data}
      onRowsDelete={deleteFeedback}
      columns={columns}
      onActionButtonClick={handleActionButtonClick}
      ActionIcon={InfoRoundedIcon}
    />
  );
}

import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

export default function TableToolbar({ onAddClick }) {
  return (
    <>
      <Tooltip title="Add Marker">
        <IconButton onClick={onAddClick}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

import React from 'react';
import { IconButton } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';

const renderEditButton = handleEdit => (value, { rowData }) => {
  const id = rowData && rowData[0];

  return (
    <IconButton onClick={handleEdit(id)}>
      <EditIcon />
    </IconButton>
  );
};

export const columns = [
  {
    name: 'Id',
    field: 'id',
    options: {
      display: false,
      filter: true,
    },
  },
  {
    name: 'Title',
    field: 'title',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Location',
    field: 'location',
    options: {
      filter: true,
    },
  },
  {
    name: 'Description',
    field: 'description',
    options: {
      filter: false,
    },
  },
  {
    name: 'CreationDate',
    field: 'creationDate',
    options: {
      display: false,
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Author',
    field: 'author',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Address',
    field: 'address',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Actions',
    options: {
      filter: false,
      sort: false,
    },
  },
];

export default (handleRowEdit) => {
  return columns.map((column) => {
    if (column.name === 'Actions') {
      const newColumn = { ...column };

      newColumn.options.customBodyRender = renderEditButton(handleRowEdit);

      return newColumn;
    }

    return column;
  });
};

import React from 'react';
import { IconButton } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';

const renderEditButton = handleEdit => () => (
  <IconButton onClick={handleEdit}>
    <EditIcon />
  </IconButton>
);

export const columns = [
  {
    name: 'Id',
    field: 'id',
    options: {
      display: false,
      filter: true,
      sort: false,
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
    name: 'Password',
    field: 'password',
    options: {
      filter: false,
      sort: false,
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

import React from 'react';
import { IconButton } from '@material-ui/core';
import { InfoRounded as InfoRoundedIcon } from '@material-ui/icons';

const renderEditButton = handleShowDetails => (value, { rowData }) => {
  const id = rowData && rowData[0];

  return (
    <IconButton onClick={handleShowDetails(id)}>
      <InfoRoundedIcon />
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
    name: 'Location',
    field: 'location',
    options: {
      filter: true,
    },
  },
  {
    name: 'Type',
    field: 'type',
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: 'Description',
    field: 'description',
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: 'Password',
    field: 'password',
    options: {
      display: false,
      filter: false,
      sort: false,
    },
  },
  {
    name: 'CreationDate',
    field: 'creationDate',
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

export default (handleShowDetails) => {
  return columns.map((column) => {
    if (column.name === 'Actions') {
      const newColumn = { ...column };

      newColumn.options.customBodyRender = renderEditButton(handleShowDetails);

      return newColumn;
    }

    return column;
  });
};

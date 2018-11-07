const columns = [
  {
    name: 'Id',
    field: 'id',
    options: {
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
];

export default columns;

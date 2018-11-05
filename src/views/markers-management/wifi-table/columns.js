const columns = [
  {
    name: 'Id',
    field: 'id',
    options: {
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
      filter: true,
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
  {
    name: 'Password',
    field: 'password',
    options: {
      filter: false,
      sort: false,
    },
  },
];

export default columns;

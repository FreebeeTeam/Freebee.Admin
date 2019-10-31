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
      display: false,
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
    name: '',
    isAction: true,
    options: {
      filter: false,
      sort: false,
    },
  },
];

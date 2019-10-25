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
    name: '',
    isAction: true,
    options: {
      filter: false,
      sort: false,
    },
  },
];

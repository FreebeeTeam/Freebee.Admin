export const MODAL_TYPES = {
  add: { label: 'Add', value: 1 },
  edit: { label: 'Edit', value: 2 },
};

export const TABLE_TYPES = {
  wifi: {
    label: 'Wifi',
    value: 0,
    entityName: 'wifi',
    storeName: 'wifi',
    editFunc: 'editWifi',
    createFunc: 'createWifi',
  },
  toilets: {
    label: 'Toilets',
    value: 1,
    entityName: 'toilet',
    storeName: 'toilets',
    editFunc: 'editToilet',
    createFunc: 'createToilet',
  },
  sockets: {
    label: 'Sockets',
    value: 2,
    entityName: 'socket',
    storeName: 'sockets',
    editFunc: 'editSocket',
    createFunc: 'createSocket',
  },
  water: {
    label: 'Water',
    value: 3,
    entityName: 'water',
    storeName: 'water',
    editFunc: 'editWater',
    createFunc: 'createWater',
  },
};

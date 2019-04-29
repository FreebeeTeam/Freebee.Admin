export const feedback = {
  get: () => '/feedback',
  approve: () => '/feedback/approve',
  update: id => `/feedback/${id}`,
  remove: id => `/feedback/${id}`,
  removeMany: () => '/feedback/delete',
};

export const wifi = {
  get: () => '/wifi',
  create: () => '/wifi',
  update: () => '/wifi',
  remove: id => `/wifi/${id}`,
  removeMany: () => '/wifi/delete',
};

export const toilets = {
  get: () => '/toilets',
  create: () => '/toilets',
  update: () => '/toilets',
  remove: id => `/toilets/${id}`,
  removeMany: () => '/toilets/delete',
};

export const sockets = {
  get: () => '/sockets',
  create: () => '/sockets',
  update: () => '/sockets',
  remove: id => `/sockets/${id}`,
  removeMany: () => '/sockets/delete',
};

export const markerTypes = {
  get: () => '/markers/types',
};

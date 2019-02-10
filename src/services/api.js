const base = process.env.REACT_APP_FREEBEE_API;

const buildUrl = url => `${base}${url}`;

export const feedback = {
  get: () => buildUrl('/feedback'),
  approve: () => buildUrl('/feedback/approve'),
  update: id => buildUrl(`/feedback/${id}`),
  remove: id => buildUrl(`/feedback/${id}`),
  removeMany: () => buildUrl('/feedback/delete'),
};

export const wifi = {
  get: () => buildUrl('/wifi'),
  create: () => buildUrl('/wifi'),
  update: () => buildUrl('/wifi'),
  remove: id => buildUrl(`/wifi/${id}`),
  removeMany: () => buildUrl('/wifi/delete'),
};

export const toilets = {
  get: () => buildUrl('/toilets'),
  create: () => buildUrl('/toilets'),
  update: () => buildUrl('/toilets'),
  remove: id => buildUrl(`/toilets/${id}`),
  removeMany: () => buildUrl('/toilets/delete'),
};

export const markerTypes = {
  get: () => buildUrl('/markers/types'),
};

const base = process.env.REACT_APP_FREEBEE_API;

const buildUrl = url => `${base}${url}`;

const feedback = {
  get: () => buildUrl('/feedback'),
  update: id => buildUrl(`/feedback/${id}`),
  remove: id => buildUrl(`/feedback/${id}`),
  removeMany: () => buildUrl('/feedback/delete'),
};

const wifi = {
  get: () => buildUrl('/wifi'),
  create: () => buildUrl('/wifi'),
  update: () => buildUrl('/wifi'),
  remove: id => buildUrl(`/wifi/${id}`),
};

const toilets = {
  get: () => buildUrl('/toilets'),
  create: () => buildUrl('/toilets'),
  update: () => buildUrl('/toilets'),
  remove: id => buildUrl(`/toilets/${id}`),
};

export {
  feedback,
  wifi,
  toilets,
};

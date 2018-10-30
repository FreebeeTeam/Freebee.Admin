const base = process.env.REACT_APP_FREEBEE_API;

const buildUrl = url => `${base}${url}`;

const feedback = {
  get: () => buildUrl('/feedback'),
  update: id => buildUrl(`/feedback/${id}`),
  remove: id => buildUrl(`/feedback/${id}`),
  removeMany: () => buildUrl('/feedback/delete'),
};

export {
  feedback,
};

const base = process.env.REACT_APP_FREEBEE_API;

const buildUrl = url => `${base}${url}`;

const feedback = {
  getFeedback: () => buildUrl('/feedback'),
  updateFeedback: id => buildUrl(`/feedback/${id}`),
  removeFeedback: id => buildUrl(`/feedback/${id}`),
};

export {
  feedback,
};

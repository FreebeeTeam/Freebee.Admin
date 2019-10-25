import http from './http';
import { feedback } from './endpoints';

export const getFeedback = () => {
  return http.get(
    feedback.get(),
  );
};

export const approveFeedback = (approvedFeedback) => http.post(
  feedback.approve(),
  approvedFeedback,
);

export const updateFeedback = (updatedFeedback) => http.put(
  feedback.update(updatedFeedback.id),
  updatedFeedback,
);

export const removeFeedback = (ids = []) => (ids.length === 1
  ? http.delete(feedback.remove(ids[0]))
  : http.post(feedback.removeMany(), { ids }));

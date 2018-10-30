import axios from 'axios';
import { feedback } from './api';

export const getFeedback = () => axios.get(
  feedback.get(),
);
export const updateFeedback = updatedFeedback => axios.put(
  feedback.update(updatedFeedback.id),
  updatedFeedback,
);
export const removeFeedback = (ids = []) => {
  const isOneItem = ids.length === 1;

  if (isOneItem) {
    return axios.delete(feedback.remove(ids[0]));
  }

  return axios.post(feedback.removeMany(), ids);
};

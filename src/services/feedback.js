import axios from 'axios';
import { feedback } from './api';

export const getFeedback = () => axios.get(
  feedback.get(),
);

export const approveFeedback = approvedFeedback => axios.post(
  feedback.approve(),
  approvedFeedback,
);

export const updateFeedback = updatedFeedback => axios.put(
  feedback.update(updatedFeedback.id),
  updatedFeedback,
);

export const removeFeedback = (ids = []) => (ids.length === 1
  ? axios.delete(feedback.remove(ids[0]))
  : axios.post(feedback.removeMany(), ids));

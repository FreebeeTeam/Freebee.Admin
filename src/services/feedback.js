import axios from 'axios';
import { feedback } from './api';

export const getFeedback = () => axios.get(
  feedback.getFeedback(),
);
export const updateFeedback = updatedFeedback => axios.put(
  feedback.updateFeedback(updatedFeedback.id),
  updatedFeedback,
);
export const removeFeedback = id => axios.delete(
  feedback.removeFeedback(id),
);

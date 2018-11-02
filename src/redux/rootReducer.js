import { combineReducers } from 'redux';
import feedback from './feedback';
import user from './user';

export default combineReducers({
  feedback,
  user,
});

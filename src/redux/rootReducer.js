import { combineReducers } from 'redux';
import feedback from './feedback';
import user from './user';
import markers from './markers';

export default combineReducers({
  feedback,
  user,
  markers,
});

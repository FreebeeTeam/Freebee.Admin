import { combineReducers } from 'redux';
import feedback from './feedback';
import user, { actions as userActions } from './user';
import markers from './markers';

const appReducer = combineReducers({
  feedback,
  user,
  markers,
});

export default (state, action) => {
  if (action.type === userActions.logout().type) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

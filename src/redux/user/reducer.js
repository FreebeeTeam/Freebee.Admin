import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileFailure,
} from './actions';

const defaultState = {
  profile: {
    nickname: '',
    picture: null,
  },
  isFetching: true,
  error: null,
};

const reducer = handleActions({
  [getUserProfileRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [getUserProfileSuccess]: (state, { payload: { profile } }) => update(state, {
    profile: {
      $set: profile,
    },
    isFetching: {
      $set: false,
    },
  }),
  [getUserProfileFailure]: (state, { payload: { error } }) => update(state, {
    error: {
      $set: error,
    },
    isFetching: {
      $set: false,
    },
  }),
}, defaultState);

export default reducer;

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
  isFetchingProfile: true,
  profileError: null,
};

const reducer = handleActions({
  [getUserProfileRequest]: state => update(state, {
    isFetchingProfile: {
      $set: true,
    },
    profileError: {
      $set: defaultState.profileError,
    },
  }),
  [getUserProfileSuccess]: (state, { payload: { profile } }) => update(state, {
    profile: {
      $set: profile,
    },
    isFetchingProfile: {
      $set: false,
    },
  }),
  [getUserProfileFailure]: (state, { payload: { error } }) => update(state, {
    profileError: {
      $set: error,
    },
    isFetchingProfile: {
      $set: false,
    },
  }),
}, defaultState);

export default reducer;

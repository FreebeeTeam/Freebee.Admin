import { createActions } from 'redux-actions';

const {
  user: {
    getUserProfileRequest,
    getUserProfileSuccess,
    getUserProfileFailure,
  },
} = createActions({
  USER: {
    GET_USER_PROFILE_REQUEST: () => {},
    GET_USER_PROFILE_SUCCESS: profile => ({ profile }),
    GET_USER_PROFILE_FAILURE: error => ({ error }),
  },
});

export {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileFailure,
};

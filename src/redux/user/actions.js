import { createActions } from 'redux-actions';

const {
  user: {
    getUserProfileRequest,
    getUserProfileSuccess,
    getUserProfileFailure,

    logout,
    login,
    handleAuthentication,
  },
} = createActions({
  USER: {
    GET_USER_PROFILE_REQUEST: () => {},
    GET_USER_PROFILE_SUCCESS: profile => ({ profile }),
    GET_USER_PROFILE_FAILURE: error => ({ error }),

    LOGOUT: () => {},
    LOGIN: () => {},
    HANDLE_AUTHENTICATION: () => {},
  },
});

export {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileFailure,

  logout,
  login,
  handleAuthentication,
};

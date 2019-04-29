import {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileFailure,

  logout, login, handleAuthentication,
} from './actions';
import Auth from '../../services/auth';

// eslint-disable-next-line import/prefer-default-export
export const getUserProfile = () => async (dispatch) => {
  dispatch(getUserProfileRequest());
  const auth = new Auth();

  try {
    auth.getUserProfile(
      profile => dispatch(getUserProfileSuccess(profile)),
      error => dispatch(getUserProfileFailure(error)),
    );
  } catch (err) {
    console.error(err);

    dispatch(getUserProfileFailure(err));
  }
};

export const userLogout = () => async (dispatch) => {
  const auth = new Auth();

  dispatch(logout());

  auth.logout();
};

export const userLogin = () => async (dispatch) => {
  const auth = new Auth();

  dispatch(login());

  auth.login();
};

export const handleUserAuthentication = (success, failure) => async (dispatch) => {
  const auth = new Auth();

  dispatch(handleAuthentication());

  auth.handleAuthentication(success, failure);
};

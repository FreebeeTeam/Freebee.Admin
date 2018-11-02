import {
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileFailure,
} from './actions';

// eslint-disable-next-line import/prefer-default-export
export const getUserProfile = auth => async (dispatch) => {
  dispatch(getUserProfileRequest());

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

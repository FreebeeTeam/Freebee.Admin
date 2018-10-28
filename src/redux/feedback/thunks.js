import {
  getFeedbackRequest,
  getFeedbackSuccess,
  getFeedbackFailure,

  updateFeedbackRequest,
  updateFeedbackSuccess,
  updateFeedbackFailure,

  removeFeedbackRequest,
  removeFeedbackSuccess,
  removeFeedbackFailure,
} from './actions';

export const getFeedback = () => async (dispatch) => {
  dispatch(getFeedbackRequest());

  try {
    // TODO
  } catch (error) {
    console.error(error);

    dispatch(getFeedbackFailure(error));
  }
};

export const updateFeedback = feedback => async (dispatch) => {
  dispatch(updateFeedbackRequest());

  try {
    // TODO
  } catch (error) {
    console.error(error);

    dispatch(updateFeedbackFailure(error));
  }
};

export const removeFeedback = id => async (dispatch) => {
  dispatch(removeFeedbackRequest());

  try {
    // TODO
  } catch (error) {
    console.error(error);

    dispatch(removeFeedbackFailure(error));
  }
};

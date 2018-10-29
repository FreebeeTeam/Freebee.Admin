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

import { feedbackService } from '../../services';

export const getFeedback = () => async (dispatch) => {
  dispatch(getFeedbackRequest());

  try {
    const { data } = await feedbackService.getFeedback();

    dispatch(getFeedbackSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(getFeedbackFailure(error));
  }
};

export const updateFeedback = feedback => async (dispatch) => {
  dispatch(updateFeedbackRequest());

  try {
    const { data } = await feedbackService.updateFeedback(feedback);

    dispatch(updateFeedbackSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(updateFeedbackFailure(error));
  }
};

export const removeFeedback = id => async (dispatch) => {
  dispatch(removeFeedbackRequest());

  try {
    const { data } = await feedbackService.removeFeedback(id);

    dispatch(removeFeedbackSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(removeFeedbackFailure(error));
  }
};

import { createActions } from 'redux-actions';

const {
  feedback: {
    getFeedbackRequest,
    getFeedbackSuccess,
    getFeedbackFailure,

    updateFeedbackRequest,
    updateFeedbackSuccess,
    updateFeedbackFailure,

    removeFeedbackRequest,
    removeFeedbackSuccess,
    removeFeedbackFailure,
  },
} = createActions({
  FEEDBACK: {
    GET_FEEDBACK_REQUEST: () => {},
    GET_FEEDBACK_SUCCESS: feedback => ({ feedback }),
    GET_FEEDBACK_FAILURE: error => ({ error }),

    UPDATE_FEEDBACK_REQUEST: () => {},
    UPDATE_FEEDBACK_SUCCESS: feedback => ({ feedback }),
    UPDATE_FEEDBACK_FAILURE: error => ({ error }),

    REMOVE_FEEDBACK_REQUEST: () => {},
    REMOVE_FEEDBACK_SUCCESS: feedback => ({ feedback }),
    REMOVE_FEEDBACK_FAILURE: error => ({ error }),
  },
});

export {
  getFeedbackRequest,
  getFeedbackSuccess,
  getFeedbackFailure,

  updateFeedbackRequest,
  updateFeedbackSuccess,
  updateFeedbackFailure,

  removeFeedbackRequest,
  removeFeedbackSuccess,
  removeFeedbackFailure,
};

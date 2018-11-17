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

    setFeedbackToEdit,

    approveFeedbackRequest,
    approveFeedbackSuccess,
    approveFeedbackFailure,
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
    REMOVE_FEEDBACK_SUCCESS: ids => ({ ids }),
    REMOVE_FEEDBACK_FAILURE: error => ({ error }),

    SET_FEEDBACK_TO_EDIT: id => ({ id }),

    APPROVE_FEEDBACK_REQUEST: () => {},
    APPROVE_FEEDBACK_SUCCESS: feedback => ({ feedback }),
    APPROVE_FEEDBACK_FAILURE: error => ({ error }),
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

  setFeedbackToEdit,

  approveFeedbackRequest,
  approveFeedbackSuccess,
  approveFeedbackFailure,
};

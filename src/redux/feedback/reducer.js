import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
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


const defaultState = {
  list: [],
  isFetching: true,
  error: null,
};

const reducer = handleActions({
  [getFeedbackRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [getFeedbackSuccess]: (state, { payload: { feedback } }) => update(state, {
    list: {
      $set: feedback,
    },
    isFetching: {
      $set: false,
    },
  }),
  [getFeedbackFailure]: (state, { payload: { error } }) => update(state, {
    error: {
      $set: error,
    },
    isFetching: {
      $set: false,
    },
  }),

  [updateFeedbackRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [updateFeedbackSuccess]: (state, { payload: { feedback } }) => {
    const listWithUpdated = state.list.filter(f => f.id !== feedback.id).push(feedback);
    return update(state, {
      list: {
        $set: listWithUpdated,
      },
      isFetching: {
        $set: false,
      },
    });
  },
  [updateFeedbackFailure]: (state, { payload: { error } }) => update(state, {
    error: {
      $set: error,
    },
    isFetching: {
      $set: false,
    },
  }),

  [removeFeedbackRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [removeFeedbackSuccess]: (state, { payload: { feedback } }) => update(state, {
    list: {
      $set: state.list.filter(f => f.id !== feedback.id),
    },
    isFetching: {
      $set: false,
    },
  }),
  [removeFeedbackFailure]: (state, { payload: { error } }) => update(state, {
    error: {
      $set: error,
    },
    isFetching: {
      $set: false,
    },
  }),
}, defaultState);

export default reducer;

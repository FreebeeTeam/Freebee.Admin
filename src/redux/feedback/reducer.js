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
    isFetching: true,
    error: null,
  }),
  [getFeedbackSuccess]: (state, { payload: { feedback } }) => update(state, {
    list: {
      $set: feedback,
    },
    isFetching: false,
  }),
  [getFeedbackFailure]: (state, { payload: { error } }) => update(state, {
    error: {
      $set: error,
    },
    isFetching: false,
  }),

  [updateFeedbackRequest]: state => update(state, {
    isFetching: true,
    error: null,
  }),
  [updateFeedbackSuccess]: (state, { payload: { feedback } }) => {
    const listWithUpdated = state.list.filter(f => f.id !== feedback.id).push(feedback);
    return update(state, {
      list: {
        $set: listWithUpdated,
      },
      isFetching: false,
    });
  },
  [updateFeedbackFailure]: (state, { payload: { error } }) => update(state, {
    error: {
      $set: error,
    },
    isFetching: false,
  }),

  [removeFeedbackRequest]: state => update(state, {
    isFetching: true,
    error: null,
  }),
  [removeFeedbackSuccess]: (state, { payload: { feedback } }) => update(state, {
    feedback: state.list.filter(f => f.id !== feedback.id),
    isFetching: false,
  }),
  [removeFeedbackFailure]: (state, { payload: { error } }) => update(state, {
    error: {
      $set: error,
    },
    isFetching: false,
  }),
}, defaultState);

export default reducer;

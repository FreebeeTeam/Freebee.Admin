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

  approveFeedbackRequest,
  approveFeedbackSuccess,
  approveFeedbackFailure,

  setFeedbackToEdit,
} from './actions';


const defaultState = {
  selectedFeedbackToEdit: null,
  list: [],
  isFetching: true,
  error: null,
};

const reducer = handleActions({
  [setFeedbackToEdit]: (state, { payload: { id } }) => update(state, {
    selectedFeedbackToEdit: {
      $set: id,
    },
  }),

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
    const listWithUpdated = state.list.filter(f => f.id !== feedback.id);
    listWithUpdated.push(feedback);

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
  [removeFeedbackSuccess]: (state, { payload: { ids } }) => update(state, {
    list: {
      $set: state.list.filter(f => !ids.includes(f.id)),
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

  [approveFeedbackRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [approveFeedbackSuccess]: (state, { payload: { feedback } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: state.list.filter(f => f.id !== feedback.id),
    },
  }),
  [approveFeedbackFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),
}, defaultState);

export default reducer;

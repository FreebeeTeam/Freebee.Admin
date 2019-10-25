import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  createToiletFailure,
  createToiletRequest,
  createToiletSuccess,
  getToiletsFailure,
  getToiletsRequest,
  getToiletsSuccess,
  removeToiletsFailure,
  removeToiletsRequest,
  removeToiletsSuccess,
  updateToiletFailure,
  updateToiletRequest,
  updateToiletSuccess,
} from './actions';

const defaultState = {
  list: [],
  isFetching: false,
  error: null,
};

const reducer = handleActions({
  [getToiletsRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [getToiletsSuccess]: (state, { payload: { toilets } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: toilets,
    },
  }),
  [getToiletsFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [createToiletRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [createToiletSuccess]: (state, { payload: { toilet } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $push: [toilet],
    },
  }),
  [createToiletFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [updateToiletRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [updateToiletSuccess]: (state, { payload: { toilet } }) => {
    const listWithUpdated = state.list.filter(t => t.id !== toilet.id);
    listWithUpdated.push(toilet);

    return update(state, {
      isFetching: {
        $set: false,
      },
      list: {
        $set: listWithUpdated,
      },
    });
  },
  [updateToiletFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [removeToiletsRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [removeToiletsSuccess]: (state, { payload: { ids } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: state.list.filter(t => !ids.includes(t.id)),
    },
  }),
  [removeToiletsFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),
}, defaultState);

export default reducer;

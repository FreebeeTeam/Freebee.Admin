import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  getWaterRequest,
  getWaterSuccess,
  getWaterFailure,

  createWaterRequest,
  createWaterSuccess,
  createWaterFailure,

  updateWaterRequest,
  updateWaterSuccess,
  updateWaterFailure,

  removeWaterRequest,
  removeWaterSuccess,
  removeWaterFailure,
} from './actions';

const defaultState = {
  list: [],
  isFetching: false,
  error: null,
};

const reducer = handleActions({
  [getWaterRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [getWaterSuccess]: (state, { payload: { water } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: water,
    },
  }),
  [getWaterFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [createWaterRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [createWaterSuccess]: (state, { payload: { water } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $push: [water],
    },
  }),
  [createWaterFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [updateWaterRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [updateWaterSuccess]: (state, { payload: { water } }) => {
    const listWithUpdated = state.list.filter(t => t.id !== water.id);
    listWithUpdated.push(water);

    return update(state, {
      isFetching: {
        $set: false,
      },
      list: {
        $set: listWithUpdated,
      },
    });
  },
  [updateWaterFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [removeWaterRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [removeWaterSuccess]: (state, { payload: { ids } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: state.list.filter(t => !ids.includes(t.id)),
    },
  }),
  [removeWaterFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),
}, defaultState);

export default reducer;

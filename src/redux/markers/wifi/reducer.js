import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  getWifiRequest,
  getWifiSuccess,
  getWifiFailure,

  createWifiRequest,
  createWifiSuccess,
  createWifiFailure,

  updateWifiRequest,
  updateWifiSuccess,
  updateWifiFailure,

  removeWifiRequest,
  removeWifiSuccess,
  removeWifiFailure,
} from './actions';

const defaultState = {
  list: [],
  isFetching: false,
  error: null,
};

const reducer = handleActions({
  [getWifiRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [getWifiSuccess]: (state, { payload: { wifi } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: wifi,
    },
  }),
  [getWifiFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [createWifiRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [createWifiSuccess]: (state, { payload: { wifi } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $push: wifi,
    },
  }),
  [createWifiFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [updateWifiRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [updateWifiSuccess]: (state, { payload: { wifi } }) => {
    const listWithUpdated = state.list.filter(w => w.id !== wifi.id);
    listWithUpdated.push(wifi);

    return update(state, {
      isFetching: {
        $set: false,
      },
      list: {
        $set: listWithUpdated,
      },
    });
  },
  [updateWifiFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [removeWifiRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [removeWifiSuccess]: (state, { payload: { wifi } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: state.list.filter(w => w.id !== wifi.id),
    },
  }),
  [removeWifiFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),
}, defaultState);

export default reducer;

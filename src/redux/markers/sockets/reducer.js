import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  getSocketsRequest,
  getSocketsSuccess,
  getSocketsFailure,

  createSocketRequest,
  createSocketSuccess,
  createSocketFailure,

  updateSocketRequest,
  updateSocketSuccess,
  updateSocketFailure,

  removeSocketsRequest,
  removeSocketsSuccess,
  removeSocketsFailure,
} from './actions';

const defaultState = {
  list: [],
  isFetching: false,
  error: null,
};

const reducer = handleActions({
  [getSocketsRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [getSocketsSuccess]: (state, { payload: { sockets } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: sockets,
    },
  }),
  [getSocketsFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [createSocketRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [createSocketSuccess]: (state, { payload: { socket } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $push: [socket],
    },
  }),
  [createSocketFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [updateSocketRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [updateSocketSuccess]: (state, { payload: { socket } }) => {
    const listWithUpdated = state.list.filter(t => t.id !== socket.id);
    listWithUpdated.push(socket);

    return update(state, {
      isFetching: {
        $set: false,
      },
      list: {
        $set: listWithUpdated,
      },
    });
  },
  [updateSocketFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),

  [removeSocketsRequest]: state => update(state, {
    isFetching: {
      $set: true,
    },
    error: {
      $set: null,
    },
  }),
  [removeSocketsSuccess]: (state, { payload: { ids } }) => update(state, {
    isFetching: {
      $set: false,
    },
    list: {
      $set: state.list.filter(t => !ids.includes(t.id)),
    },
  }),
  [removeSocketsFailure]: (state, { payload: { error } }) => update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  }),
}, defaultState);

export default reducer;

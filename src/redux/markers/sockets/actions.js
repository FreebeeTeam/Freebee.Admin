import { createActions } from 'redux-actions';

const {
  markers: {
    sockets: {
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
    },
  },
} = createActions({
  MARKERS: {
    SOCKETS: {
      GET_SOCKETS_REQUEST: () => {},
      GET_SOCKETS_SUCCESS: sockets => ({ sockets }),
      GET_SOCKETS_FAILURE: error => ({ error }),

      CREATE_SOCKET_REQUEST: () => {},
      CREATE_SOCKET_SUCCESS: socket => ({ socket }),
      CREATE_SOCKET_FAILURE: error => ({ error }),

      UPDATE_SOCKET_REQUEST: () => {},
      UPDATE_SOCKET_SUCCESS: socket => ({ socket }),
      UPDATE_SOCKET_FAILURE: error => ({ error }),

      REMOVE_SOCKETS_REQUEST: () => {},
      REMOVE_SOCKETS_SUCCESS: ids => ({ ids }),
      REMOVE_SOCKETS_FAILURE: error => ({ error }),
    },
  },
});

export {
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
};

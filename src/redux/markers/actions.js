import { createActions } from 'redux-actions';
import { toiletsActions } from './toilets';
import { wifiActions } from './wifi';
import { socketsActions } from './sockets';
import { waterActions } from './water';

const {
  markers: {
    setMarkerIdToEdit,

    getMarkerTypesRequest,
    getMarkerTypesSuccess,
    getMarkerTypesFailure,
  },
} = createActions({
  MARKERS: {
    SET_MARKER_ID_TO_EDIT: (id) => ({ id }),

    GET_MARKER_TYPES_REQUEST: () => {},
    GET_MARKER_TYPES_SUCCESS: (types) => ({ types }),
    GET_MARKER_TYPES_FAILURE: () => {},
  },
});

export {
  setMarkerIdToEdit,

  getMarkerTypesRequest,
  getMarkerTypesSuccess,
  getMarkerTypesFailure,

  toiletsActions,
  wifiActions,
  socketsActions,
  waterActions,
};

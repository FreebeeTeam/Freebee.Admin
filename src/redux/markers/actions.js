import { createActions } from 'redux-actions';
import { actions as toiletsActions } from './toilets';
import { actions as wifiActions } from './wifi';

const {
  markers: {
    setMarkerIdToEdit,

    getMarkerTypesRequest,
    getMarkerTypesSuccess,
    getMarkerTypesFailure,
  },
} = createActions({
  MARKERS: {
    SET_MARKER_ID_TO_EDIT: id => ({ id }),

    GET_MARKER_TYPES_REQUEST: () => {},
    GET_MARKER_TYPES_SUCCESS: types => ({ types }),
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


};

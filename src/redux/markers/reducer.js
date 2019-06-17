import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  setMarkerIdToEdit,

  getMarkerTypesRequest,
  getMarkerTypesSuccess,
  getMarkerTypesFailure,
} from './actions';
import toilets from './toilets';
import wifi from './wifi';
import sockets from './sockets';
import water from './water';

const defaultState = {
  selectedMarkerToEdit: null,

  markerTypes: [],
  markerTypesIsFetching: false,
  markerTypesError: null,
};

const reducer = handleActions({
  [setMarkerIdToEdit]: (state, { payload: { id } }) => update(state, {
    selectedMarkerToEdit: {
      $set: id,
    },
  }),
  [getMarkerTypesRequest]: state => update(state, {
    markerTypesIsFetching: {
      $set: true,
    },
    markerTypesError: {
      $set: defaultState.markerTypesError,
    },
  }),
  [getMarkerTypesSuccess]: (state, { payload: { types } }) => update(state, {
    markerTypes: {
      $set: types,
    },
    markerTypesIsFetching: {
      $set: false,
    },
  }),
  [getMarkerTypesFailure]: (state, { payload: { error } }) => update(state, {
    markerTypesIsFetching: {
      $set: false,
    },
    markerTypesError: {
      $set: error,
    },
  }),
}, defaultState);

export default combineReducers({
  shared: reducer,
  toilets,
  wifi,
  sockets,
  water,
});

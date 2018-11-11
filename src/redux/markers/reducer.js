import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { setMarkerIdToEdit } from './actions';
import toilets from './toilets';
import wifi from './wifi';

const defaultState = {
  selectedMarkerToEdit: null,
};

const reducer = handleActions({
  [setMarkerIdToEdit]: (state, { payload: { id } }) => update(state, {
    selectedMarkerToEdit: {
      $set: id,
    },
  }),
}, defaultState);

export default combineReducers({
  shared: reducer,
  toilets,
  wifi,
});

import { createActions } from 'redux-actions';
import { actions as toiletsActions } from './toilets';
import { actions as wifiActions } from './wifi';

const {
  markers: {
    setMarkerIdToEdit,
  },
} = createActions({
  MARKERS: {
    SET_MARKER_ID_TO_EDIT: id => ({ id }),
  },
});

export {
  setMarkerIdToEdit,
  toiletsActions,
  wifiActions,
};

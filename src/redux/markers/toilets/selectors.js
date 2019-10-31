import { markerToEditSelectorFactory } from '../selectors';

const selectToiletsList = (state) => state.markers.toilets.list;
export const selectToiletToEdit = markerToEditSelectorFactory(selectToiletsList);

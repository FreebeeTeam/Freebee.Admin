import { markerToEditSelectorFactory } from '../selectors';

const selectSocketsList = (state) => state.markers.sockets.list;
export const selectSocketToEdit = markerToEditSelectorFactory(selectSocketsList);

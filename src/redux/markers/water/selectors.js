import { markerToEditSelectorFactory } from '../selectors';

const selectList = (state) => state.markers.water.list;
export const selectWaterToEdit = markerToEditSelectorFactory(selectList);

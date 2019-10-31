import { markerToEditSelectorFactory } from '../selectors';

const selectWifiList = (state) => state.markers.wifi.list;
export const selectWifiToEdit = markerToEditSelectorFactory(selectWifiList);

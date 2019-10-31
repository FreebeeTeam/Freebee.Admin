import { createSelector } from 'reselect';
import moment from 'moment';
import { DATE_FORMAT } from '../../config/format';
import { columns as wifiColumns } from '../../views/MarkersManagement/Wifi/WifiTable/columns';
import { columns as toiletsColumns } from '../../views/MarkersManagement/Toilets/ToiletsTable/columns';
import { columns as socketsColumns } from '../../views/MarkersManagement/Sockets/SocketsTable/columns';
import { columns as waterColumns } from '../../views/MarkersManagement/Water/WaterTable/columns';

export const selectMarkerTypes = (state) => state.markers.shared.markerTypes;
const markersSelectorFactory = (initialSelect, columns) => createSelector(
  [initialSelect],
  (list) => list.map((item) => {
    const itemAsArray = columns.map((col) => {
      if (col.field === 'location') {
        return item[col.field].coordinates.toString();
      }

      if (col.field === 'creationDate') {
        return moment(item[col.field]).format(DATE_FORMAT);
      }
      return item[col.field] ? item[col.field] : null;
    });

    return itemAsArray;
  }),
);

const selectWifi = (state) => state.markers.wifi.list;
export const selectWifiAsArray = markersSelectorFactory(
  selectWifi,
  wifiColumns,
);

const selectToilets = (state) => state.markers.toilets.list;
export const selectToiletsAsArray = markersSelectorFactory(
  selectToilets,
  toiletsColumns,
);

const selectSockets = (state) => state.markers.sockets.list;
export const selectSocketsAsArray = markersSelectorFactory(
  selectSockets,
  socketsColumns,
);

const selectWater = (state) => state.markers.water.list;
export const selectWaterAsArray = markersSelectorFactory(
  selectWater,
  waterColumns,
);

export const selectSelectedMarkerToEditId = (state) => state.markers.shared.selectedMarkerToEdit;
const selectMarkers = (state) => state.markers;
export const selectedToEditEntityFactory = (type) => createSelector(
  [selectSelectedMarkerToEditId, selectMarkers],
  (id, markers) => {
    const { [type]: { list } } = markers;
    const entity = list.find((e) => e.id === id);

    return { ...entity, location: entity.location.coordinates };
  },
);

export const markerToEditSelectorFactory = (markerListSelector) => createSelector(
  [selectSelectedMarkerToEditId, markerListSelector],
  (id, list) => {
    if (!id) {
      return null;
    }

    if (!list) {
      return null;
    }
    const marker = list.find((item) => item.id === id);
    if (marker) {
      marker.location = marker.location.coordinates;
    }

    return marker;
  },
);

import { createSelector } from 'reselect';
import moment from 'moment';
import { DATE_FORMAT } from '../../config/format';
import { columns as wifiColumns } from '../../views/markers-management/wifi-table/columns';
import { columns as toiletsColumns } from '../../views/markers-management/toilets-table/columns';

const markersSelectorFactory = (initialSelect, columns) => createSelector(
  initialSelect,
  list => list.map((item) => {
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

const selectWifi = state => state.markers.wifi.list;
export const selectWifiAsArray = markersSelectorFactory(
  selectWifi,
  wifiColumns,
);

const selectToilets = state => state.markers.toilets.list;
export const selectToiletsAsArray = markersSelectorFactory(
  selectToilets,
  toiletsColumns,
);

const selectSelectedToEditId = state => state.markers.shared.selectedMarkerToEdit;
const selectMarkers = state => state.markers;
export const selectedToEditEntityFactory = type => createSelector(
  [selectSelectedToEditId, selectMarkers],
  (id, markers) => {
    const { [type]: { list } } = markers;
    const entity = list.find(e => e.id === id);

    return { ...entity, location: entity.location.coordinates };
  },
);

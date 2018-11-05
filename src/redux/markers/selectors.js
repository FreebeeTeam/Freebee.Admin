import { createSelector } from 'reselect';
import wifiColumns from '../../views/markers-management/wifi-table/columns';
import toiletsColumns from '../../views/markers-management/toilets-table/columns';

const createMarkersSelector = (initialSelect, columns) => createSelector(
  initialSelect,
  list => list.map((item) => {
    const itemAsArray = columns.map((col) => {
      if (col.field === 'location') {
        return item[col.field].values.toString();
      }
      return item[col.field];
    });

    return itemAsArray;
  }),
);

const selectWifi = state => state.markers.wifi.list;
export const selectWifiAsArray = createMarkersSelector(
  selectWifi,
  wifiColumns,
);

const selectToilets = state => state.markers.toilets.list;
export const selectToiletsAsArray = createMarkersSelector(
  selectToilets,
  toiletsColumns,
);

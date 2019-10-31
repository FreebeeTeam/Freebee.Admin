import { toiletsThunks } from './toilets';
import { wifiThunks } from './wifi';
import { socketsThunks } from './sockets';
import { waterThunks } from './water';
import * as markersService from '../../services/markers';

import { getMarkerTypesFailure, getMarkerTypesRequest, getMarkerTypesSuccess, } from './actions';

const { getWifi } = wifiThunks;
const { getToilets } = toiletsThunks;
const { getSockets } = socketsThunks;
const { getWater } = waterThunks;

export const getMarkers = () => async (dispatch) => {
  await Promise.all([
    dispatch(getWifi()),
    dispatch(getToilets()),
    dispatch(getSockets()),
    dispatch(getWater()),
  ]);
};

export const getMarkerTypes = () => async (dispatch) => {
  dispatch(getMarkerTypesRequest());

  try {
    const { data } = await markersService.getMarkerTypes();

    dispatch(getMarkerTypesSuccess(data));
  } catch (e) {
    console.error(e);
    dispatch(getMarkerTypesFailure(e));
  }
};

export {
  wifiThunks,
  toiletsThunks,
  socketsThunks,
  waterThunks,
};

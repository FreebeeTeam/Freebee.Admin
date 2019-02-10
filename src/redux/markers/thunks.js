import { thunks as toiletsThunks } from './toilets';
import { thunks as wifiThunks } from './wifi';
import * as markersService from '../../services/markers';

import {
  getMarkerTypesRequest,
  getMarkerTypesSuccess,
  getMarkerTypesFailure,
} from './actions';


const { getWifi } = wifiThunks;
const { getToilets } = toiletsThunks;

export const getMarkers = () => async (dispatch) => {
  await Promise.all([
    dispatch(getWifi()),
    dispatch(getToilets()),
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
};

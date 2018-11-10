import { thunks as toiletsThunks } from './toilets';
import { thunks as wifiThunks } from './wifi';

const { getWifi } = wifiThunks;
const { getToilets } = toiletsThunks;

export const getMarkers = () => async (dispatch) => {
  await Promise.all([
    dispatch(getWifi()),
    dispatch(getToilets()),
  ]);
};

export {
  wifiThunks,
  toiletsThunks,
};

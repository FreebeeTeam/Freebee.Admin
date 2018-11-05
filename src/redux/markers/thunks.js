import { thunks as toiletsThunks } from './toilets';
import { thunks as wifiThunks } from './wifi';

const {
  getWifi,
} = wifiThunks;

const {
  getToilets,
} = toiletsThunks;

export {
  getWifi,
  getToilets,
};

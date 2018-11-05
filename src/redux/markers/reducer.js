import { combineReducers } from 'redux';
import toilets from './toilets';
import wifi from './wifi';

export default combineReducers({
  toilets,
  wifi,
});

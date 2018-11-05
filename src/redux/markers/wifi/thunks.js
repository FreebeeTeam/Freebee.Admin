import { markersService } from '../../../services';
import {
  getWifiRequest,
  getWifiSuccess,
  getWifiFailure,
} from './actions';

// eslint-disable-next-line import/prefer-default-export
export const getWifi = () => async (dispatch) => {
  dispatch(getWifiRequest());

  try {
    const { data } = await markersService.getWifi();

    dispatch(getWifiSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(getWifiFailure(error));
  }
};

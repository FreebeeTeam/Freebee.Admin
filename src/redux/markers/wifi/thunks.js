import { markersService } from '../../../services';
import {
  getWifiRequest,
  getWifiSuccess,
  getWifiFailure,

  createWifiRequest,
  createWifiSuccess,
  createWifiFailure,

  updateWifiRequest,
  updateWifiSuccess,
  updateWifiFailure,

  removeWifiRequest,
  removeWifiSuccess,
  removeWifiFailure,
} from './actions';

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

export const createWifi = wifi => async (dispatch) => {
  dispatch(createWifiRequest());

  try {
    const { data } = await markersService.createWifi(wifi);

    dispatch(createWifiSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(createWifiFailure(error));
  }
};

export const editWifi = wifi => async (dispatch) => {
  dispatch(updateWifiRequest());

  try {
    const { data } = await markersService.updateWifi(wifi);

    dispatch(updateWifiSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(updateWifiFailure(error));
  }
};

export const removeWifi = (ids = []) => async (dispatch) => {
  dispatch(removeWifiRequest());

  try {
    await markersService.removeWifi(ids);

    dispatch(removeWifiSuccess(ids));
  } catch (error) {
    console.error(error);

    dispatch(removeWifiFailure(error));
  }
};

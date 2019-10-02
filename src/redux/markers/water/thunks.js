import { markersService } from '../../../services';
import {
  getWaterRequest,
  getWaterSuccess,
  getWaterFailure,

  createWaterRequest,
  createWaterSuccess,
  createWaterFailure,

  updateWaterRequest,
  updateWaterSuccess,
  updateWaterFailure,

  removeWaterRequest,
  removeWaterSuccess,
  removeWaterFailure,
} from './actions';

export const getWater = () => async (dispatch) => {
  dispatch(getWaterRequest());

  try {
    const { data } = await markersService.getWater();

    dispatch(getWaterSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(getWaterFailure(error));
  }
};

export const createWater = socket => async (dispatch) => {
  dispatch(createWaterRequest());

  try {
    const { data } = await markersService.createWater(socket);

    dispatch(createWaterSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(createWaterFailure(error));
  }
};

export const editWater = socket => async (dispatch) => {
  dispatch(updateWaterRequest());

  try {
    const { data } = await markersService.updateWater(socket);

    dispatch(updateWaterSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(updateWaterFailure(error));
  }
};

export const removeWater = (ids = []) => async (dispatch) => {
  dispatch(removeWaterRequest());

  try {
    await markersService.removeWater(ids);

    dispatch(removeWaterSuccess(ids));
  } catch (error) {
    console.error(error);

    dispatch(removeWaterFailure(error));
  }
};

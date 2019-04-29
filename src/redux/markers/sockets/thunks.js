import { markersService } from '../../../services';
import {
  getSocketsRequest,
  getSocketsSuccess,
  getSocketsFailure,

  createSocketRequest,
  createSocketSuccess,
  createSocketFailure,

  updateSocketRequest,
  updateSocketSuccess,
  updateSocketFailure,

  removeSocketsRequest,
  removeSocketsSuccess,
  removeSocketsFailure,
} from './actions';

// eslint-disable-next-line import/prefer-default-export
export const getSockets = () => async (dispatch) => {
  dispatch(getSocketsRequest());

  try {
    const { data } = await markersService.getSockets();

    dispatch(getSocketsSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(getSocketsFailure(error));
  }
};

export const createSocket = socket => async (dispatch) => {
  dispatch(createSocketRequest());

  try {
    const { data } = await markersService.createSocket(socket);

    dispatch(createSocketSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(createSocketFailure(error));
  }
};

export const editSocket = socket => async (dispatch) => {
  dispatch(updateSocketRequest());

  try {
    const { data } = await markersService.updateSocket(socket);

    dispatch(updateSocketSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(updateSocketFailure(error));
  }
};

export const removeSockets = (ids = []) => async (dispatch) => {
  dispatch(removeSocketsRequest());

  try {
    await markersService.removeSockets(ids);

    dispatch(removeSocketsSuccess(ids));
  } catch (error) {
    console.error(error);

    dispatch(removeSocketsFailure(error));
  }
};

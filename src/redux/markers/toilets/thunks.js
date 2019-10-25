import { markersService } from '../../../services';
import {
  createToiletFailure,
  createToiletRequest,
  createToiletSuccess,
  getToiletsFailure,
  getToiletsRequest,
  getToiletsSuccess,
  removeToiletsFailure,
  removeToiletsRequest,
  removeToiletsSuccess,
  updateToiletFailure,
  updateToiletRequest,
  updateToiletSuccess,
} from './actions';

// eslint-disable-next-line import/prefer-default-export
export const getToilets = () => async (dispatch) => {
  dispatch(getToiletsRequest());

  try {
    const { data } = await markersService.getToilets();

    dispatch(getToiletsSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(getToiletsFailure(error));
  }
};

export const createToilet = toilet => async (dispatch) => {
  dispatch(createToiletRequest());

  try {
    const { data } = await markersService.createToilet(toilet);

    dispatch(createToiletSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(createToiletFailure(error));
  }
};

export const editToilet = toilet => async (dispatch) => {
  dispatch(updateToiletRequest());

  try {
    const { data } = await markersService.updateToilet(toilet);

    dispatch(updateToiletSuccess(data));
  } catch (error) {
    console.error(error);

    dispatch(updateToiletFailure(error));
  }
};

export const removeToilets = (ids = []) => async (dispatch) => {
  dispatch(removeToiletsRequest());

  try {
    await markersService.removeToilets(ids);

    dispatch(removeToiletsSuccess(ids));
  } catch (error) {
    console.error(error);

    dispatch(removeToiletsFailure());
  }
};

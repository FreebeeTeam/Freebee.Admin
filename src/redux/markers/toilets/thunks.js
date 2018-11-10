import { markersService } from '../../../services';
import {
  getToiletsRequest,
  getToiletsSuccess,
  getToiletsFailure,

  createToiletRequest,
  createToiletSuccess,
  createToiletFailure,
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

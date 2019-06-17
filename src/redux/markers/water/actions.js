import { createActions } from 'redux-actions';

const {
  markers: {
    water: {
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
    },
  },
} = createActions({
  MARKERS: {
    WATER: {
      GET_WATER_REQUEST: () => {},
      GET_WATER_SUCCESS: water => ({ water }),
      GET_WATER_FAILURE: error => ({ error }),

      CREATE_WATER_REQUEST: () => {},
      CREATE_WATER_SUCCESS: water => ({ water }),
      CREATE_WATER_FAILURE: error => ({ error }),

      UPDATE_WATER_REQUEST: () => {},
      UPDATE_WATER_SUCCESS: water => ({ water }),
      UPDATE_WATER_FAILURE: error => ({ error }),

      REMOVE_WATER_REQUEST: () => {},
      REMOVE_WATER_SUCCESS: ids => ({ ids }),
      REMOVE_WATER_FAILURE: error => ({ error }),
    },
  },
});

export {
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
};

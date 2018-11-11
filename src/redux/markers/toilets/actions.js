import { createActions } from 'redux-actions';

const {
  markers: {
    toilets: {
      getToiletsRequest,
      getToiletsSuccess,
      getToiletsFailure,

      createToiletRequest,
      createToiletSuccess,
      createToiletFailure,

      updateToiletRequest,
      updateToiletSuccess,
      updateToiletFailure,

      removeToiletsRequest,
      removeToiletsSuccess,
      removeToiletsFailure,
    },
  },
} = createActions({
  MARKERS: {
    TOILETS: {
      GET_TOILETS_REQUEST: () => {},
      GET_TOILETS_SUCCESS: toilets => ({ toilets }),
      GET_TOILETS_FAILURE: error => ({ error }),

      CREATE_TOILET_REQUEST: () => {},
      CREATE_TOILET_SUCCESS: toilet => ({ toilet }),
      CREATE_TOILET_FAILURE: error => ({ error }),

      UPDATE_TOILET_REQUEST: () => {},
      UPDATE_TOILET_SUCCESS: toilet => ({ toilet }),
      UPDATE_TOILET_FAILURE: error => ({ error }),

      REMOVE_TOILETS_REQUEST: () => {},
      REMOVE_TOILETS_SUCCESS: ids => ({ ids }),
      REMOVE_TOILETS_FAILURE: error => ({ error }),
    },
  },
});

export {
  getToiletsRequest,
  getToiletsSuccess,
  getToiletsFailure,


  createToiletRequest,
  createToiletSuccess,
  createToiletFailure,

  updateToiletRequest,
  updateToiletSuccess,
  updateToiletFailure,

  removeToiletsRequest,
  removeToiletsSuccess,
  removeToiletsFailure,
};

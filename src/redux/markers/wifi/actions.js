import { createActions } from 'redux-actions';

const {
  markers: {
    wifi: {
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
    },
  },
} = createActions({
  MARKERS: {
    WIFI: {
      GET_WIFI_REQUEST: () => {},
      GET_WIFI_SUCCESS: wifi => ({ wifi }),
      GET_WIFI_FAILURE: error => ({ error }),

      CREATE_WIFI_REQUEST: () => {},
      CREATE_WIFI_SUCCESS: wifi => ({ wifi }),
      CREATE_WIFI_FAILURE: error => ({ error }),

      UPDATE_WIFI_REQUEST: () => {},
      UPDATE_WIFI_SUCCESS: wifi => ({ wifi }),
      UPDATE_WIFI_FAILURE: error => ({ error }),

      REMOVE_WIFI_REQUEST: () => {},
      REMOVE_WIFI_SUCCESS: wifi => ({ wifi }),
      REMOVE_WIFI_FAILURE: error => ({ error }),
    },
  },
});

export {
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
};

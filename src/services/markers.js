import http from './http';
import {
  wifi, toilets, sockets, water,
  markerTypes,
} from './api';

export const getWifi = () => http.get(wifi.get());
export const createWifi = createdWifi => http.post(wifi.create(), createdWifi);
export const updateWifi = updatedWifi => http.put(wifi.update(), updatedWifi);
export const removeWifi = ids => (ids.length === 1
  ? http.delete(wifi.remove(ids[0]))
  : http.post(wifi.removeMany(), { ids }));

export const getToilets = () => http.get(toilets.get());
export const createToilet = createdToilet => http.post(toilets.create(), createdToilet);
export const updateToilet = updatedToilet => http.put(toilets.update(), updatedToilet);
export const removeToilets = ids => (ids.length === 1
  ? http.delete(toilets.remove(ids[0]))
  : http.post(toilets.removeMany(), { ids }));

export const getSockets = () => http.get(sockets.get());
export const createSocket = createdSocket => http.post(sockets.create(), createdSocket);
export const updateSocket = updatedSocket => http.put(sockets.update(), updatedSocket);
export const removeSockets = ids => (ids.length === 1
  ? http.delete(sockets.remove(ids[0]))
  : http.post(sockets.removeMany(), { ids }));

export const getWater = () => http.get(water.get());
export const createWater = createdWater => http.post(water.create(), createdWater);
export const updateWater = updatedWater => http.put(water.update(), updatedWater);
export const removeWater = ids => (ids.length === 1
  ? http.delete(water.remove(ids[0]))
  : http.post(water.removeMany(), { ids }));

export const getMarkerTypes = () => http.get(markerTypes.get());

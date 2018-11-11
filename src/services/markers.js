import axios from 'axios';
import { wifi, toilets } from './api';

export const getWifi = () => axios.get(wifi.get());
export const createWifi = createdWifi => axios.post(wifi.create(), createdWifi);
export const updateWifi = updatedWifi => axios.put(wifi.update(), updatedWifi);
export const removeWifi = ids => (ids.length === 1
  ? axios.delete(wifi.remove(ids[0]))
  : axios.post(wifi.removeMany(), ids));

export const getToilets = () => axios.get(toilets.get());
export const createToilet = createdToilet => axios.post(toilets.create(), createdToilet);
export const updateToilets = updatedToilet => axios.put(toilets.update(), updatedToilet);
export const removeToilets = ids => (ids.length === 1
  ? axios.delete(toilets.remove(ids[0]))
  : axios.post(toilets.removeMany(), ids));

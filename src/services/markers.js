import axios from 'axios';
import { wifi, toilets } from './api';

export const getWifi = () => axios.get(wifi.get());
export const createWifi = createdWifi => axios.post(wifi.create(), createdWifi);
export const updateWifi = updatedWifi => axios.put(wifi.update(), updatedWifi);
export const removeWifi = id => axios.delete(wifi.remove(id));

export const getToilets = () => axios.get(toilets.get());
export const createToilets = createdToilet => axios.post(toilets.create(), createdToilet);
export const updateToilets = updatedToilet => axios.put(toilets.update(), updatedToilet);
export const removeToilets = id => axios.delete(toilets.remove(id));

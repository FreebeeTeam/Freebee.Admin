import axios from 'axios';
import { getToken } from './auth';

const base = process.env.REACT_APP_API;

const http = axios.create({
  baseURL: base,
  timeout: 3000,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const appendTokenToRequests = () => {
  http.defaults.common = {
    ...http.defaults.common,
    Authorization: `Bearer ${getToken()}`,
  };
};

export default http;

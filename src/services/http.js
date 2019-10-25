import axios from 'axios';
import { getToken } from './auth';

const base = process.env.REACT_APP_API;

const http = axios.create({
  baseURL: base,
  timeout: 3000,
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;

  return config;
});

export default http;

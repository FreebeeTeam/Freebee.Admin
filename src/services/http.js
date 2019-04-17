import axios from 'axios';
import { getToken } from './auth';

const base = process.env.REACT_APP_API;

export default axios.create({
  baseURL: base,
  timeout: 3000,
  headers: { Authorization: `Bearer ${getToken()}` },
});

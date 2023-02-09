import axios from 'axios';
import { getToken, logout } from './auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});


api.interceptors.request.use(async (config: any) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  else {
    logout();
  }
  return config;
});

export default api;

import axios from 'axios'

import { getToken } from './auth';

const api = axios.create({
  baseURL: "http://localhost:8888/api/user"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    console.log(config);
    
    config.headers['x-access-token'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
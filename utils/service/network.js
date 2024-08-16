import axios from 'axios';
import { network } from './index';
import { getLocalStorage, setLocalStorage } from '../storage';

export const apiClient = axios.create({
  baseURL: network.baseURL, 
  timeout: 10000,
});


apiClient.interceptors.request.use(
  async (config) => {
    const token = await getLocalStorage('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = await getLocalStorage('refreshToken');
        const response = await axios.post(network.baseURL, { token: refreshToken });
        const newAccessToken = response.data.accessToken;

        await setLocalStorage('accessToken', newAccessToken);
        apiClient.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return apiClient(originalRequest);
      } catch (err) {
        console.log('Token refresh error:', err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);


export const ç = async (method, url, data = null, params = null) => {
  try {
    const response = await apiClient({
      method: method,
      url: url,
      data: data,
      params: params,
    });
    return response?.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// apiRequest('get', '/your-endpoint', null, { param1: 'value1' });
// apiRequest('post', '/your-endpoint', { key: 'value' });
// apiRequest('put', '/your-endpoint', { key: 'value' });
// apiRequest('delete', '/your-endpoint');
// apiRequest('patch', '/your-endpoint', { key: 'value' });



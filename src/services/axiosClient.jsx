import { URL } from '@/config/AppConst';
import axios from 'axios';
var qs = require('qs');

export const API_DEFAULT_PARAMS = {
  part: 'snippet',
  maxResults: 16,
  key: process.env.REACT_APP_KEY_API,
};

const axiosClient = axios.create({
  baseURL: URL,
  header: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosClient;

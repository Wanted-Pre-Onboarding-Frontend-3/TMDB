import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ko',
  },
  paramsSerializer: function (params) {
    return new URLSearchParams(params).toString();
  },
  timeout: 1000,
});

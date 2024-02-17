import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

// 인터셉터 추가 함수
const Interceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = '401e00e8-56da-45e8-b914-74c31bd3eb26';
      if (token) {
        config.headers['Authorization'] = token;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
};

const axiosInstance = (auth: boolean) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (auth) {
    Interceptors(instance);
  }
  return instance;
};

export const baseAPI = axiosInstance(false);
export const authAPI = axiosInstance(true);

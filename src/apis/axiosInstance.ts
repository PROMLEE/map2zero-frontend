import axios, { AxiosInstance } from 'axios';

// 공통 Axios 인스턴스
const createAxiosInstance = () => axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
});

// 인증이 필요한 API 
export const authAPI = () => {
  const instance = createAxiosInstance();
  addInterceptors(instance);
  return instance;
};

// 기본 API 
export const baseAPI = createAxiosInstance();

// 인터셉터 추가 함수
const addInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    if (!config.headers) return config;
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, (error) => Promise.reject(error));
};


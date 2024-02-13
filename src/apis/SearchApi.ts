import { baseAPI, authAPI } from './customApi';

export const getSearchApi = async () => {
  try {
    const response = await baseAPI.get(`/stores/search`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getPopularSearchApi = async () => {
  try {
    const response = await baseAPI.get(`/stores/popular`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getRecentSearchApi = async () => {
  try {
    const response = await authAPI.get(`/stores/recent`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

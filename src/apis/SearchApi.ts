import { baseAPI, authAPI } from './customApi';

export const getSearchApi = async (params: any) => {
  try {
    const response = await authAPI.get(`/stores/search${params}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getPopularSearchApi = async () => {
  try {
    const response = await baseAPI.get('/stores/popular');
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getRecentSearchApi = async () => {
  try {
    const response = await authAPI.get('/keywords/recent');
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const deleteSingleRecentSearchApi = async (data: any) => {
  try {
    const response = await authAPI.delete(`/keywords/recent/single`, data);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const deleteAllRecentSearchApi = async () => {
  try {
    const response = await authAPI.delete('/keywords/recent/all');
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

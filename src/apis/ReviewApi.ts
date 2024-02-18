import { authAPI } from './customApi';

export const getReviewsApi = async () => {
  try {
    const response = await authAPI.get(`/my-page/reviews`, { params: { size: 100 } });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const deleteSingleReviewApi = async (data: any) => {
  try {
    const response = await authAPI.delete('/reviews', { data: data });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

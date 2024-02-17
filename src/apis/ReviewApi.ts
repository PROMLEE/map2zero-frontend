import { authAPI } from './customApi';

export const getReviewsApi = async () => {
  try {
    const response = await authAPI.get(`/my-page/reviews`, { params: { size: 16 } });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

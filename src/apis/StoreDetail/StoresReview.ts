import { authAPI, baseAPI } from '../customApi';

const StoresReview: any = async (id: string) => {
  try {
    const response = await baseAPI.get(`/stores/${id}/reviews`);
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
const StoresMyReview: any = async (id: string) => {
  try {
    const response = await authAPI.get(`/stores/${id}/my-reviews`);
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export { StoresReview, StoresMyReview };

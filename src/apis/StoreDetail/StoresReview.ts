import { authAPI } from '../customApi';

const StoresReview: any = async (id: string, sort: string) => {
  try {
    const response = await authAPI.get(`/stores/${id}/reviews`, { params: { sort: sort, size: 100 } });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
const StoresMyReview: any = async (id: string, sort: string) => {
  try {
    const response = await authAPI.get(`/stores/${id}/my-reviews`, { params: { sort: sort, size: 100 } });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export { StoresReview, StoresMyReview };

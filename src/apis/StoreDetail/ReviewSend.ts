import { authAPI } from '../customApi';

const ReviewSend: any = async (request: any) => {
  try {
    const response = await authAPI.post(`/reviews`, request, { headers: { 'content-type': 'multipart/form-data' } });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    // alert('연동 에러');
  }
};

export default ReviewSend;

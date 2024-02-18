import { authAPI } from '../customApi';

const ReviewSend: any = async (request: any) => {
  try {
    await authAPI.post(`/reviews`, request, { headers: { 'content-type': 'multipart/form-data' } });
    return true;
  } catch (e) {
    console.log(e);
    alert('연동 에러 - 관리자에게 문의하세요');
    return false;
  }
};

export default ReviewSend;

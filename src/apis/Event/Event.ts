import { authAPI } from '../customApi';

const Events = async (id: number, status: string) => {
  try {
    const response = await authAPI.get(`/m/stores/${id}/events`, { params: { size: 100, status: status } });
    return response.data.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

const EventSend: any = async (id: string, request: any) => {
  try {
    await authAPI.post(`/m/stores/${id}/events`, request, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    return true;
  } catch (e) {
    console.log(e);
    alert('연동 에러 - 관리자에게 문의해주세요');
    return false;
  }
};
export { Events, EventSend };

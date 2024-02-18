import { authAPI } from '../customApi';

const Events = async (id: number, status: string) => {
  try {
    const response = await authAPI.get(`/m/stores/${id}/events`, { params: { size: 100, status: status } });
    console.log(response);
    return response.data.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export { Events };

import { baseAPI } from '../customApi';

const StoreEvent: any = async (id: string, size: number) => {
  try {
    const response = await baseAPI.get(`/stores/${id}/events`, { params: { size: size } });
    return response.data;
  } catch (e) {
    // console.log(e);
    // alert('연동 에러');
  }
};

export default StoreEvent;

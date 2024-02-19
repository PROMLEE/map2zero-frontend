import { authAPI } from '../customApi';

const StoreDetailApi: any = async (id: string) => {
  try {
    const response = await authAPI.get(`/stores/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export default StoreDetailApi;

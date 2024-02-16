import { baseAPI } from '../customApi';

const StoreProduct: any = async (id: string) => {
  try {
    const response = await baseAPI.get(`/stores/${id}/products`, { params: { size: 6 } });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export default StoreProduct;

import { baseAPI } from '../customApi';

const Products = async (id: number) => {
  try {
    const response = await baseAPI.get(`/stores/${id}/products`, { params: { size: 100 } });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    // alert('연동 에러');
  }
};

export default Products;

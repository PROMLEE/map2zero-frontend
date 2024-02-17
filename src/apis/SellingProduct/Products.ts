import { baseAPI, authAPI } from '../customApi';

const Products = async (id: number, tag: number | null, keyword: string | null) => {
  try {
    const response = await baseAPI.get(`/stores/${id}/products`, { params: { size: 100, tag: tag, keyword: keyword } });
    return response.data.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
const ProductsM = async (id: number, tag: number | null, keyword: string | null) => {
  try {
    const response = await authAPI.get(`/m/stores/${id}/products`, {
      params: { size: 100, tag: tag, keyword: keyword },
    });
    return response.data.data;
  } catch (e) {
    console.log(e);
    alert('잘못된 접근입니다! 관리자에게 문의하세요');
  }
};

const ProductsSale = async (body: any) => {
  try {
    const response = await authAPI.patch(`/m/products/sale`, body);
    return response.data.data;
  } catch (e) {
    console.log(e);
    alert('잘못된 접근입니다! 관리자에게 문의하세요');
  }
};

const ProductSend = async (id: number, request: any) => {
  try {
    const response = await authAPI.post(`/m/stores/${id}/products`, request, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export { Products, ProductsM, ProductsSale, ProductSend };

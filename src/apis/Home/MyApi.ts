import { baseAPI} from '../customApi'

 const MyApi =  async()=> {
  try {
    const response = await  baseAPI.get(`products/my`)
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};} 

export default MyApi; 
import { baseAPI} from '../customApi'

 const CurationsApi =  async()=> {
  try {
    const response = await  baseAPI.get(`curations`)
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};} 

export default CurationsApi ; 
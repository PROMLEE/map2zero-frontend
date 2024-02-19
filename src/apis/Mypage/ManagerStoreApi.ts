import { authAPI} from '../customApi'

 const ManagerStoreApi =  async()=> {
  try {
    const response = await  authAPI.get(`/managers/stores`)
    return response;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};}

export default ManagerStoreApi ;
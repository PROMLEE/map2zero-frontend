import { authAPI} from '../customApi'

 const PersonalInfoApi =  async()=> {
  try {
    const response = await  authAPI.get(`/my-page`)
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};}

export default PersonalInfoApi;
import { authAPI} from '../customApi'

 const OwnerApi =  async(data:any)=> {
  try {
    const response = await  authAPI.post(`/managers`,  data )
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);

};
 }

export default OwnerApi ;
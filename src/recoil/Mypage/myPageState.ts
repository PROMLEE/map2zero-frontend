import { selector} from "recoil";
import { PersonalInfoType } from "./myPageStateTypes";
import PersonalInfoApi from "../../apis/Mypage/PersonalInfoApi";

const InfoState = selector< PersonalInfoType>({
    key: "InfoState",
    get : async () => {
      const data = await PersonalInfoApi();
      console.log(data)
      return data.data; 
    }
   
  });

  
export { InfoState};

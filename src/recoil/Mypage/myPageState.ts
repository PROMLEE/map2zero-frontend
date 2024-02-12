import { selector,atom} from "recoil";
import { PersonalInfoType } from "./myPageStateTypes";
import PersonalInfoApi from "../../apis/Mypage/PersonalInfoApi";

const InfoStateSelector = selector< PersonalInfoType>({
    key: "InfoStateSelector",
    get : async () => {
      const data = await PersonalInfoApi();
      return data.data; 
    }
   
  });


export {  InfoStateSelector};

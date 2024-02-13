import { selector,atom} from "recoil";
import { PersonalInfoType } from "./myPageStateTypes";
import PersonalInfoApi from "../../apis/Mypage/PersonalInfoApi";
import ReviewApi from "../../apis/Mypage/ReviewApi";


const InfoStateSelector = selector< PersonalInfoType>({
    key: "InfoStateSelector",
    get : async () => {
      const data = await PersonalInfoApi();
      return data.data; 
    }
   
  });


  const ReviewStateSelector= selector<any>({
    key: "ReviewStateSelector",
    get : async () => {
      const data = await ReviewApi();
      return data.data; 
    }
   
  });




export {  InfoStateSelector,ReviewStateSelector};

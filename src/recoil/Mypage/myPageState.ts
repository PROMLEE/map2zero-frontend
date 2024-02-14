import { selector} from "recoil";
import PersonalInfoApi from "../../apis/Mypage/PersonalInfoApi";
import ReviewApi from "../../apis/Mypage/ReviewApi";


const InfoStateSelector = selector({
    key: "InfoStateSelector",
    get : async () => {
      const data = await PersonalInfoApi();
      return data.data; 
    }
   
  });


  const ReviewStateSelector= selector({
    key: "ReviewStateSelector",
    get : async () => {
      const data = await ReviewApi();
      return data.data; 
    }
   
  });



export {  InfoStateSelector,ReviewStateSelector};

import { atom } from "recoil";
import { InputPostStateType, InputStateType } from "./ownerStateTypes";

export  const InputState = atom<InputStateType>({
  key: "InputState",
  default: {
    address:{
      searchAddress:"",
      detailAddress:""
    },
    name:"",business_number:"",
    contact:"",representative:""
  }
});


export  const InputPostState = atom<InputPostStateType>({
  key: "InputPostState",
  default: {
    name: "",business_number:"" ,
    address:{
      province:"",
  city: "",
  road_name:"",
  lot_number: "",  
    },
    contact:"",representative:""
  }
});



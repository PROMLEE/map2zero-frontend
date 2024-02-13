import { atom } from "recoil";
import {InputStateType} from "./ownerTypes";

const InputState = atom<InputStateType>({
  name: "",
  business_number:"" ,
  address:{
    province: "",
    city: "",
    road_name: "",
    lot_number: "",
  },
  contact:"",representative:""
}
);

export { InputState };

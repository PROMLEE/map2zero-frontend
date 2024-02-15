import { atom } from "recoil";

export interface AddressType {
  searchAddress: string,
  detailAddress:string
}

export interface AddressPostType {
  province: string,
  city: string,
  road_name: string,
  lot_number: string,  
}

export interface BasicInputStateType {
  name: string,
  business_number: string,
  contact: string,
  representative: string,
}

export interface InputStateType extends BasicInputStateType { 
  address: AddressType,
}

export interface InputPostStateType extends BasicInputStateType { 
  address: AddressPostType,
}

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



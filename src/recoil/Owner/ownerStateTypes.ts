

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

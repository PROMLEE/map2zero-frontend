export interface AddressType {
  province: string,
  city: string,
  road_name: string,
  lot_number: string,  
}
export interface InputStateType {
  name: string;
  business_number: string;
  address:AddressType;
  contact: string;
  representative:string;

}


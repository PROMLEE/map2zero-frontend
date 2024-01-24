export interface AddressesType {
  address: string; 
  detailAddress: string;          
}
export interface InputStateType {
  title: string;
  businessLicenseNum: number | undefined;
  addresses:AddressesType;
  contact: number | undefined;
  ceoName:string;

}


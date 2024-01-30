export  type StoreInfoDummyType = {
  img: string;
  name: string;
  address :string;
  reviewCount: number;
  reviewScore: number;
  promotion: string;
}

export const  StoreInfoDummy: StoreInfoDummyType = 
  {
    img: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    name: '매장명',
    address : '매장주소',
    reviewCount: 42,
    reviewScore: 4.4,
    promotion: "매장 홍보 멘트"
  };
 
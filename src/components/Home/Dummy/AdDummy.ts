export  type AdItemType = {
  img: string;
  title: string;
  date :string;
  bookmark:boolean;
}

export const AdItem:AdItemType[] = [
  {
    img: `${process.env.PUBLIC_URL}/assets/Home/부리1.jpeg`,
    title: '비건 쿠기 만들기 클래스',
    date : '2024.01.21~2024.03.01',
    bookmark:false
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/Home/부리2.jpeg`,
    title: '비건 빵 만들기',
    date : '2024.01.21~2024.03.01',
    bookmark:true
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/Home/부리3.jpeg`,
    title: '배고프다',
    date : '2024.01.21~2024.03.01',
    bookmark:false
  },
];

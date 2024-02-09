import styled from 'styled-components';
import Slick from './SlidePic';

interface itemsProps {
  item: string;
  name: string;
}

const items: itemsProps[] = [
  {
    item: `${process.env.PUBLIC_URL}/assets/StoreDetail/example_pic.png`,
    name: '이미지01',
  },
  {
    item: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    name: '이미지02',
  },
  {
    item: `${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.svg`,
    name: '이미지03',
  },
];

function SlideBox() {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} alt={item.name} />
        </SliderItem>
      ))}
    </Slick>
  );
}

const SliderItem = styled.div`
  img {
    width: 60.8rem;
    height: 48rem;
    @media (max-width: 768px) {
      width: 100%;
      height: 90rem;
    }
  }
`;
export default SlideBox;

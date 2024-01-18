import styled from 'styled-components';
import Slick from './SlidePic';

interface itemsProps {
  item: string;
  name: string;
}

const SliderItem = styled.div`
  img {
    width: 92.4rem;
    height: 48rem;
  }
`;

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
    item: `${process.env.PUBLIC_URL}/assets/StoreDetail/star_empty.png`,
    name: '이미지03',
  },
];

function Item() {
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

export default Item;

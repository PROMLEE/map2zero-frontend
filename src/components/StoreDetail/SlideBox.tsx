import styled from 'styled-components';
import Slick from './SlidePic';
import { useRecoilValue } from 'recoil';
import { StoreState } from '../../recoil';

function Item() {
  const data = useRecoilValue(StoreState);
  return (
    <Slick>
      {data.photos.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.url} alt={item.url} />
        </SliderItem>
      ))}
    </Slick>
  );
}

const SliderItem = styled.div`
  img {
    width: 92.4rem;
    height: 48rem;
    @media (max-width: 768px) {
      width: 100%;
      height: 93.75rem;
    }
  }
`;
export default Item;

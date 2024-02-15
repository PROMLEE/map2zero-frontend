import styled from 'styled-components';
import Slick from './SlidePic';
import { EventDetailState } from '../../recoil/StoreDetail/StoresState';
import { useRecoilValue } from 'recoil';

function SlideBox() {
  const data = useRecoilValue(EventDetailState);
  return (
    <Slick>
      {data.photos.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.url} />
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

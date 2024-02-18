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
          <img src={item.url} alt={item.url} />
        </SliderItem>
      ))}
    </Slick>
  );
}

const SliderItem = styled.div`
  img {
    max-height: 48rem;
    max-width: 60.8rem;
    margin: 0 auto;
    @media (max-width: 768px) {
      max-width: 100%;
      max-height: 90rem;
    }
  }
`;
export default SlideBox;

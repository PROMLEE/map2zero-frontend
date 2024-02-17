import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CurationSliderItem from './CurationSliderItem';
import BaseSliderItem from './BaseSliderItem';
import { useRecoilValue } from 'recoil';
import { CurationsState, TrendState } from '../../../recoil/Home/HomeState';
import StoreInfo from '../StoreInfo';

interface StyledSliderProps {
  type: string;
}

const HomeSlider = ({ type }: { type: string }) => {
  const Info =
    type === 'curation'
      ? useRecoilValue(CurationsState)
      : type === 'trend'
        ? useRecoilValue(TrendState)
        : type === 'bookmark'
          ? useRecoilValue(TrendState)
          : undefined;
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <Customdot>
        <ul> {dots} </ul>
      </Customdot>
    ),
    dotsClass: 'dots_custom',
  };

  const ItemGroup = ({ item }: any) => (
    <>
      <BaseSliderItem item={item} />
      <StoreInfo item={item} />
    </>
  );

  return (
    <SliderWrap>
      <StyledSlider {...settings} type={type}>
        {Info &&
          Info.data.map((item: any) =>
            type === 'curation' ? (
              <CurationSliderItem key={item.id} item={item} />
            ) : (
              <ItemGroup key={item.id} item={item} />
            ),
          )}
      </StyledSlider>
    </SliderWrap>
  );
};

export default HomeSlider;

const SliderWrap = styled.div`
  width: 100%;
`;

const StyledSlider = styled(Slider)<StyledSliderProps>`
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    bottom: ${(props) => (props.type !== 'curation' ? '13rem' : '2rem')} !important;

    @media (max-width: 768px) {
      bottom: ${(props) => (props.type !== 'curation' ? '47rem' : '2rem')} !important;
    }
  }

  .dots_custom li {
    cursor: pointer;
    display: inline-block;
  }

  .dots_custom li button {
    width: 7rem;
    height: 0.3rem;
    background: rgba(255, 255, 255, 0.3);
    color: transparent;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 6rem;
      height: 1rem;
    }
  }

  .dots_custom li.slick-active button {
    background-color: #fff;
    border-radius: 0.8rem;
  }

  .slick-prev::before {
    font-size: 30px !important;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .slick-next::before {
    font-size: 30px !important;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .slick-prev {
    top: ${(props) => (props.type !== 'curation' ? '25rem' : '')} !important;
    left: 4rem !important;
    z-index: 1;

    @media (max-width: 768px) {
      top: ${(props) => (props.type !== 'curation' ? '45rem' : '')} !important;
    }
  }

  .slick-next {
    top: ${(props) => (props.type !== 'curation' ? '25rem' : '')} !important;
    right: 4rem !important;
    @media (max-width: 768px) {
      top: ${(props) => (props.type !== 'curation' ? '45rem' : '')} !important;
    }
    z-index: 1;
  }

  .slick-track {
    width: 100%;
    @media (max-width: 768px) {
      height: 140rem;
    }
  }
`;

const Customdot = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2.4rem;
  text-align: center;
  @media (max-width: 768px) {
    bottom: 6rem;
  }
`;

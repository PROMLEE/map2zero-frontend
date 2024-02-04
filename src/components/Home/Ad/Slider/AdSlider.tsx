import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderItem from './SliderItem';
import { AdItem } from '../../Dummy/AdDummy';

const AdSlider = () => {
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

  return (
    <SliderWrap>
      <StyledSlider {...settings}>
        {AdItem.map((item, index) => (
          <SliderItem key={index} item={item} />
        ))}
      </StyledSlider>
    </SliderWrap>
  );
};

export default AdSlider;

const SliderWrap = styled.div`
  height: 56rem;
  width: 100vw;
  margin-bottom: 7rem;
  @media (max-width: 768px) {
    height: 140rem;
  }
`;

const StyledSlider = styled(Slider)`
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    bottom: 2em;
    @media (max-width: 768px) {
      bottom: 3rem;
    }
  }

  .dots_custom li {
    cursor: pointer;
    display: inline-block;
  }

  .dots_custom li button {
    width: 24rem;
    height: 0.4rem;
    background: rgba(255, 255, 255, 0.3);
    color: transparent;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 20rem;
      height: 1rem;
    }
  }

  .dots_custom li.slick-active button {
    background-color: #fff;
    border-radius: 0.8rem;
  }
  .slick-prev {
    left: 40px !important;
    z-index: 1;

    @media (max-width: 768px) {
      left: 10px !important;
    }
  }

  .slick-next {
    right: 40px !important;
    @media (max-width: 768px) {
      right: 10px !important;
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

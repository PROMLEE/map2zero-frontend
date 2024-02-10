import styled from 'styled-components';
import Slider from 'react-slick';

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

function SlidePic({ children, className, autoplay = true, speed = 300, loop = true }: sliderProps) {
  const settings = {
    dots: true,
    infinite: loop,
    speed: speed,
    slidesToShow: 1,
    autoplay: Boolean(autoplay),
    autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    appendDots: (dots: any) => (
      <Customdot>
        <ul> {dots} </ul>
      </Customdot>
    ),
    dotsClass: 'dots_custom',
  };
  return (
    <SlideWrapper className={className}>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </SlideWrapper>
  );
}

export default SlidePic;

const StyledSlider = styled(Slider)`
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
  }

  .dots_custom li {
    cursor: pointer;
    display: inline-block;
  }

  .dots_custom li button {
    width: 2.4rem;
    height: 0.4rem;
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

  .slick-prev {
    left: 10px !important;
    z-index: 1;
  }

  .slick-next {
    right: 10px !important;
    z-index: 1;
  }
`;

const SlideWrapper = styled.section`
  position: relative;
  width: 60.8rem;
  height: 48rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 93.75rem;
  }
`;
const Customdot = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3.2rem;
  text-align: center;
`;

import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

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

const list = ['전체', '주방용품', '위생용품', '욕실용품', '식료품', '필기용품'];
export const SlidePic = ({ children, className, autoplay = false, speed = 300, loop = false }: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      arrows: false,
      // draggable: false,
      autoplay: Boolean(autoplay),
      appendDots: (dots: string[]) => <Customdot>{dots}</Customdot>,
      customPaging: (i) => <CustomTab>{list[i]}</CustomTab>,
      dotsClass: 'dots_custom',
    }),
    [autoplay, loop, speed],
  );
  return (
    <SlideWrapper className={className}>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </SlideWrapper>
  );
};

const StyledSlider = styled(Slider)`
  .dots_custom {
    height: 3.4rem;
    align-items: center;
    display: flex;
    gap: 1.6rem;
    @media (max-width: 768px) {
      height: 7.75rem;
      gap: 0;
    }
  }

  .dots_custom li {
    height: 100%;
    cursor: pointer;
    display: inline;
    color: #565656;
    width: 6.4rem;
    font-family: 'Noto Sans KR';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 3rem;
      width: 16.125rem;
    }
  }

  .dots_custom li button {
    height: 100%;
    width: 6.4rem;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 3rem;
      width: 16.125rem;
    }
  }

  .dots_custom li.slick-active {
    border-bottom: 1px solid #565656;
    width: 6.4rem;
    color: #000;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 3rem;
      width: 16.125rem;
    }
  }
`;

const SlideWrapper = styled.section`
  width: 100%;
  margin-top: 9rem;
  @media (max-width: 768px) {
    margin-top: 17.75rem;
  }
`;
const Customdot = styled.div`
  position: absolute;
  width: 100%;
  top: -5.8rem;
  @media (max-width: 768px) {
    top: -13.75rem;
  }
`;
const CustomTab = styled.div`
  padding-top: 1rem;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 2.5rem;
  }
`;

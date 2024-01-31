import styled from 'styled-components';
import { ItemDummyType } from './Dummy/ItemDummy';
import { ReactComponent as ArrowIcon } from '../../assets/Home/arrow.svg';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';

const Items = ({ info }: { info: ItemDummyType[] }) => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScroll, setStartScroll] = useState(0);

  const onClickStore = () => {
    navigate(`/store`);
  };
  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);

    if (scrollRef.current) {
      setStartX(e.pageX + scrollRef.current.scrollLeft);
      setStartScroll(scrollRef.current.scrollLeft);
    }
  };

  const onDragEnd = () => {
    setIsDrag(false);
    if (scrollRef.current) {
      const endScroll = scrollRef.current.scrollLeft; // 스크롤 종료 위치

      if (startScroll !== endScroll) {
        // 스크롤이 발생했음
        // 클릭 이벤트 무시
      } else {
        // 스크롤이 발생하지 않음
        // 클릭 이벤트 처리
        onClickStore();
      }
    }
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrag && scrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  // 쓰로틀 구현
  // util.js
  const throttle = (func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void, ms: number) => {
    let throttled = false;
    return (...args: [React.MouseEvent<HTMLDivElement, MouseEvent>]) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <Container
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : undefined}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {info.map((item, index) => (
        <Item key={index}>
          <ImgContainer>
            <img src={item.img} alt={item.itemName} />
            <Name>{item.itemName}</Name>
            <Promotion>{item.promotion}</Promotion>
          </ImgContainer>
          <StoreNameContainer>
            <p>{item.storeName}</p>
            <div>
              <ArrowIcon fill={'#565656'} width={'1.2rem'} height={'1rem'} />
            </div>
          </StoreNameContainer>
        </Item>
      ))}
      <div></div>
    </Container>
  );
};

export default Items;

const Container = styled.div`
  display: flex;
  width: calc(100vw - 10%);
  margin-left: 10%;
  overflow-x: auto;
  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;
  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;
  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  margin-right: 2.4rem;
  width: 33rem;
  height: 39rem;
  border-radius: 8px;
  border: 0.5px solid var(--light-gray, #f2f2f2);
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  position: relative;
  > img {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 33rem;
  }
  &::after {
    content: '';
    position: absolute;
    top: 20rem;
    left: 0;
    right: 0;
    bottom: 0.2rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
    z-index: 1;
  }
`;
const Name = styled.p`
  position: absolute;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 600;
  bottom: 5.1rem;
  left: 1.6rem;
  z-index: 2;
`;
const Promotion = styled.p`
  position: absolute;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
  bottom: 1.6rem;
  left: 1.6rem;
  z-index: 2;
`;

const StoreNameContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0.8rem;
  justify-content: flex-end;
  align-items: flex-end;

  > p {
    margin-bottom: 0.1rem;
    margin-right: 1.6rem;
    font-weight: 600;
  }
`;

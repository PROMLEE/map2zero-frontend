import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/Home/arrow.svg';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { MyState, TodayState } from '../../recoil/Home/HomeState';

const Items = ({ type }: { type: string }) => {
  const Info = type === 'my' ? useRecoilValue(MyState) : type === 'today' ? useRecoilValue(TodayState) : undefined;

  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [dragState, setDragState] = useState({ dragging: false, startX: 0, clicked: false });

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // 기본 드래그 막음
    if (scrollRef.current) {
      setDragState({
        dragging: true,
        startX: e.pageX + scrollRef.current.scrollLeft,
        clicked: false,
      });
    }
  };

  const onDragEnd = () => {
    setDragState({ dragging: false, startX: 0, clicked: dragState.clicked });
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.dragging && scrollRef.current) {
      const moveX = e.pageX;
      const minDragDistance = 10;

      if (Math.abs(moveX - dragState.startX) >= minDragDistance) {
        scrollRef.current.scrollLeft = dragState.startX - e.pageX;
        setDragState((prevState) => ({ ...prevState, clicked: false }));
      }
    }
  };

  const onClickItem = (storeId: string) => {
    if (!dragState.dragging) {
      navigate(`/store/${storeId}`);
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

  const delay = 10;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <Container
      onMouseDown={onDragStart}
      onMouseMove={dragState.dragging ? onThrottleDragMove : undefined}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {Info &&
        Info.data.map((item: any, index: number) => (
          <Item key={index} onClick={() => onClickItem(item.store_id)}>
            <ImgContainer>
              <img src={item.photo.url} alt={item.name} />
              <Name>{item.name}</Name>
              <Promotion>{item.price}</Promotion>
            </ImgContainer>
            <StoreNameContainer>
              <p>{item.name}</p>
              <div>
                <CustomArrowIcon fill={'#565656'} alt={'화살표'} />
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
  height: 40rem;
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

  @media (max-width: 768px) {
    width: calc(100vw - 5%);
    margin-left: 5%;
    height: 50rem;
  }
`;

const Item = styled.div`
  margin-right: 2.4rem;
  width: 33rem;
  height: 40rem;
  border-radius: 8px;
  border: 0.5px solid var(--light-gray, #f2f2f2);
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 4rem;
    width: 37.75rem;
    height: 46rem;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  > img {
    max-width: 100%;
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
  }
  @media (max-width: 768px) {
    > img {
      height: 37.75rem;
    }
    &::after {
      top: 20rem;
    }
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

  @media (max-width: 768px) {
    font-size: 3.5rem;
    bottom: 7.5rem;
    left: 4rem;
  }
`;
const Promotion = styled.p`
  position: absolute;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
  bottom: 1.6rem;
  left: 1.6rem;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    bottom: 4rem;
    left: 4rem;
  }
`;

const CustomArrowIcon = styled(ArrowIcon)`
  width: 1.8rem;
  height: 1.5rem;
  @media (max-width: 768px) {
    width: 3.3rem;
    height: 3rem;
  }
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
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    > p {
      margin-right: 4rem;
      font-size: 2.5rem;
    }
  }
`;

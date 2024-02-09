import styled from 'styled-components';
import { ItemDummyType } from './Dummy/ItemDummy';
import { ReactComponent as ArrowIcon } from '../../assets/Home/arrow.svg';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';

const Items = ({ info }: { info: ItemDummyType[] }) => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [dragState, setDragState] = useState({ dragging: false, startX: 0, clicked: false });

  const onClickStore = () => {
    if (dragState.clicked && dragState.dragging) {
      navigate('/store');
    }
  };

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // 기본 드래그 막음
    if (scrollRef.current) {
      setDragState({
        dragging: true,
        startX: e.pageX + scrollRef.current.scrollLeft,
        clicked: true,
      });
    }
  };

  const onDragEnd = () => {
    if (dragState.clicked) {
      onClickStore();
    }
    setDragState({ dragging: false, startX: 0, clicked: false });
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.dragging && scrollRef.current) {
      const moveX = e.pageX;
      const minDragDistance = 10;

      if (Math.abs(moveX - dragState.startX) >= minDragDistance) {
        setDragState((prevState) => ({
          ...prevState,
          clicked: false,
        }));

        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        scrollRef.current.scrollLeft = dragState.startX - e.pageX;

        if (scrollLeft === 0) {
          setDragState((prevState) => ({
            ...prevState,
            startX: e.pageX,
          }));
        } else if (scrollWidth <= clientWidth + scrollLeft) {
          setDragState((prevState) => ({
            ...prevState,
            startX: e.pageX + scrollLeft,
          }));
        }
      } else {
        // 거리가 짧으면 클릭으로 간주
        setDragState((prevState) => ({
          ...prevState,
          clicked: true,
        }));
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

  @media (max-width: 768px) {
    margin-right: 4rem;
    width: 37.75rem;
    height: 44.75rem;
  }
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
      font-size: 3.5rem;
    }
  }
`;

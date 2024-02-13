import styled from 'styled-components';
import { Event } from '../StoreDetail';
import { useEffect, useRef, useState } from 'react';
import { StoreState } from '../../recoil';
import StoreEvent from '../../apis/StoreDetail/StoresEvent';
import { StoreEventtype } from '../../recoil/StoreDetail/types';
import { useRecoilValue } from 'recoil';

export const Eventlist = () => {
  const [eventlist, seteventlist] = useState<StoreEventtype[]>([]);
  const storeDetail = useRecoilValue(StoreState);

  const getdata = async () => {
    if (storeDetail.id) {
      const data = await StoreEvent(storeDetail.id, 10);
      seteventlist(data.data);
    }
  };

  useEffect(() => {
    getdata();
  }, [storeDetail]);

  // 마우스 드래그 스크롤 구현
  const scrollRef: any = useRef(null);
  const [isDrag, setIsDrag] = useState(false); //드래그중인지 상태확인
  const [startX, setStartX] = useState(0); //처음 클릭한 x좌표
  const onDragStart = (e: any) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (e: any) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX); //가장 왼쪽일 때, 움직이고 있는 마우스의 x좌표가 곧 startX로 설정.
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft); //가장 오른쪽일 때, 움직이고 있는 마우스의 x좌표에 현재 스크롤된 길이 scrollLeft의 합으로 설정
      }
    }
  };
  // 쓰로틀 구현
  const throttle = (func: any, ms: any) => {
    let throttled = false;
    return (...args: any[]) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const onThrottleDragMove = throttle(onDragMove, 0);
  return (
    <SellingBox>
      <EventTitle>진행중인 이벤트</EventTitle>
      <Products
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {eventlist.map((item, index) => {
          return <Event {...item} key={index} />;
        })}
      </Products>
    </SellingBox>
  );
};

const SellingBox = styled.div`
  width: 92.4rem;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 2.75rem;
  }
`;
const EventTitle = styled.div`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;
const Products = styled.div`
  display: flex;
  width: 92.4rem;
  /* height: 25rem; */
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 1.6rem;
  margin-top: 1.6rem;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60rem;
    gap: 4rem;
    margin-top: 4rem;
  }
`;

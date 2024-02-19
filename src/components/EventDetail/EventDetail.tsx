import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SlideBox } from '.';
import { eventDetailModal } from '../../recoil';
import { EventDetailState } from '../../recoil/StoreDetail/StoresState';
import { useEffect, useRef } from 'react';

export const EventDetail = () => {
  const setModal = useSetRecoilState(eventDetailModal);
  const data = useRecoilValue(EventDetailState);
  const modalRef = useRef<HTMLDivElement>(null); // 모달 ref 추가

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  const eventEdit = () => {
    alert('준비 중입니다! ㅠ');
  };

  return (
    <Background>
      <Modal ref={modalRef}>
        <Xbutton
          src={`${process.env.PUBLIC_URL}/assets/Edit/close.svg`}
          onClick={() => {
            setModal(false);
          }}
        />
        {data.photos ? <SlideBox /> : null}
        <Details>
          <Topbox>
            <Title>{data.title}</Title>
            {data.manager ? (
              <>
                <EditIcon src={`${process.env.PUBLIC_URL}/assets/Edit/edit.svg`} />
                <EditText onClick={eventEdit}>이벤트 수정</EditText>
              </>
            ) : null}
          </Topbox>
          <StateBox>
            {data.status === 'ACTIVE' ? <OnState>진행중</OnState> : <OffState>종료</OffState>}
            <Date>
              {data.start_date} - {data.end_date}
            </Date>
          </StateBox>
          <Summary>{data.description}</Summary>
          <LinkBox>
            신청 링크
            <URL href={`${data.application_url}`}>{data.application_url}</URL>
          </LinkBox>
        </Details>
      </Modal>
    </Background>
  );
};
const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Modal = styled.div`
  position: fixed;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  background: #fff;
  z-index: 3;
  width: 60.8rem;
  height: 80rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;
  @media (max-width: 768px) {
    border-radius: 4rem 4rem 0rem 0rem;
    bottom: 0rem;
    width: 100%;
    height: 90%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Xbutton = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  right: 1.6rem;
  top: 1.6rem;
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
    right: 4rem;
    top: 4rem;
  }
`;

const Details = styled.div`
  margin: 0 auto;
  width: 80%;
  flex-direction: column;
`;
const Topbox = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const EditIcon = styled.img`
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 12px;
  }
`;
const EditText = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-left: 2rem;
    font-size: 2.5rem;
  }
`;
const StateBox = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const OnState = styled.div`
  display: flex;
  width: 7.1rem;
  height: 3.5rem;
  background-color: #74b69d;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  padding-bottom: 0.2rem;
  @media (max-width: 768px) {
    width: 16rem;
    height: 8rem;
    border-radius: 10rem;
    font-size: 3rem;
    padding-bottom: 0.6rem;
  }
`;
const OffState = styled.div`
  display: flex;
  width: 5.8rem;
  height: 3.5rem;
  background-color: #e0e0e0;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  padding-bottom: 0.2rem;
  @media (max-width: 768px) {
    width: 13rem;
    height: 8rem;
    border-radius: 10rem;
    font-size: 3rem;
    padding-bottom: 0.6rem;
  }
`;
const Date = styled.div`
  font-size: 1.6rem;
  margin-left: 1rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 4rem;
    margin-left: 2.5rem;
  }
`;
const Summary = styled.div`
  white-space: pre-line;
  margin-top: 2rem;
  width: 100%;
  font-size: 1.2rem;
  line-height: 150%;
  color: #848484;
  @media (max-width: 768px) {
    margin-top: 5rem;
    font-size: 3rem;
  }
`;
const LinkBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  @media (max-width: 768px) {
    margin-top: 5rem;
    font-size: 4rem;
  }
`;
const URL = styled.a`
  margin-left: 2rem;
  color: #0b5c71;
  height: 1.4rem;
  font-size: 1.2rem;
  text-decoration-line: underline;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-left: 5rem;
    height: 3.5rem;
    font-size: 3rem;
  }
`;

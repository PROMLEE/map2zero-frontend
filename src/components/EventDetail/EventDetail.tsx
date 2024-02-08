import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { SlideBox } from '.';
import { eventDetailModal } from '../../recoil';
import { useEffect, useRef } from 'react';

export const EventDetail = () => {
  const setModal = useSetRecoilState(eventDetailModal);
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

  return (
    <Background>
      <Modal ref={modalRef}>
        <Xbutton
          src={`${process.env.PUBLIC_URL}/assets/StoreDetail/xbutton.png`}
          onClick={() => {
            setModal(false);
          }}
        />
        <SlideBox />
        <Details>
          <Topbox>
            <Title>이벤트명</Title>
            <EditIcon src={`${process.env.PUBLIC_URL}/assets/EventDetail/edit.svg`} />
            <EditText>이벤트 수정</EditText>
          </Topbox>
          <StateBox>
            <State>진행중</State>
            <Date>2024.01.01 - 2024.01.31</Date>
          </StateBox>
          <Summary>{`이벤트 설명 100자 내외 정도록 두면 될 것 같아요\n
ㅇ늡르애ㅡ내ㅏㅡㅍㄷㄱ민ㅋㅇㄹ,ㅊ ㅌㅋ플우ㅑ넣ㄱ소ㅑㅓ다플ㅋㅇ,ㅣㄴ;ㅊ\n
ㅁㅈㅎ고퍄ㅜㅏㅡㅊㅌ킬구머ㅗ뎌ㅑㅓㅐㅏㅊㅇㄴ\n
ㄱㅁㄱㅍ야ㅕㅊ누먿갸ㅜㅍ러ㅏㅡㅊ누먀ㅓㅗㄷㅎ겨ㅓㅏㅡㅇㄴㅊ\n
ㄻㄷ조ㅠㅕㅛㅊ눡모ㅠㅜㅇㄴ`}</Summary>
          <LinkBox>
            신청 링크
            <URL href="#">http://dddd</URL>
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
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;
const Topbox = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
`;

const EditIcon = styled.img`
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;
const EditText = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const StateBox = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
const State = styled.div`
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
`;

const Date = styled.div`
  font-size: 1.6rem;
  margin-left: 1rem;
  font-weight: 500;
`;
const Summary = styled.div`
  white-space: pre-line;
  margin-top: 2rem;
  width: 100%;
  font-size: 1.2rem;
  line-height: 0.8rem;
  color: #848484;
`;
const LinkBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
`;
const URL = styled.a`
  margin-left: 2rem;
  color: #0b5c71;
  height: 1.4rem;
  font-size: 1.2rem;
  text-decoration-line: underline;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 3.5rem;
    font-size: 3rem;
    font-weight: 400;
  }
`;

import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reviewmodalState, starRate, textRate, tagitem } from '../../recoil';
import { useEffect, useRef } from 'react';

export const SharePopup = () => {
  const setModal = useSetRecoilState(reviewmodalState);
  const modalRef = useRef<HTMLDivElement>(null); // 모달 ref 추가
  const star = useRecoilValue(starRate);
  const text = useRecoilValue(textRate);
  const tag = useRecoilValue(tagitem);
  const isConditionMet = star !== 0 && text !== '';
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
        <Title>공유하기</Title>
        <Information>
        <PicInformation>
        <Frame407>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/link.svg`} alt="검색결과 없음" />
        </Frame407>
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          링크복사 
        </PicTexts>
        </PicInformation>
        <PicInformation>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/simple-icons_kakaotalk.svg`} alt="검색결과 없음" />
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          카카오톡 
        </PicTexts>
        </PicInformation>
        <PicInformation>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/image 20.jpg`} alt="검색결과 없음" />
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          페이스북
        </PicTexts>
        </PicInformation>
        </Information>
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
  margin-top: 6.4rem;

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
  height: 26.9rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;
  @media (max-width: 768px) {
    border-radius: 4rem 4rem 0rem 0rem;
    bottom: 0rem;
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
const Title = styled.div`
  position: relative;
  margin-top: 6.25rem;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Noto Sans';
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`
  width: 24;
  height: 24;
  position: relative;

`;

const PicInformation = styled.div`
    left: 0;
    top: 0;
    position: relative;
    margin-top: 3.2rem;
    text-align: relative;
    margin: 0 auto 0 auto;

`;

const PicTexts = styled.div<{ $margintopPC: string; $margintopMB: string }>`
  position: relative;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-weight: 500;
  wordWrap: 'break-word';
  margin-top: 1.6rem;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
//   font-size: 3rem;
  margin-top: ${(props) => props.$margintopMB};
  margin-left: 6.5rem;
  }
`;

const Information = styled.div`
  justify-content: center;
  width: 29.2rem;
  height: 5.2rem;
  position: relative;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin: auto;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Frame407 = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background: #F4ECE1;
  border-radius: 3rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;

`;

import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { reviewmodalState } from '../../recoil';
import { useEffect, useRef } from 'react';

export const DetailPopup = () => {
  const setModal = useSetRecoilState(reviewmodalState);
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
        <Title>매장정보</Title>

        <Information>
        <PicInformation>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/pets.svg`} alt="검색결과 없음" />
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          반려동물 동반 
        </PicTexts>
        </PicInformation>
        <PicInformation>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/local_parking.svg`} alt="검색결과 없음" />
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          주차가능
        </PicTexts>
        </PicInformation>
        <PicInformation>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/valve.svg`} alt="검색결과 없음" />
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          리필스테이션
        </PicTexts>
        </PicInformation>
        <PicInformation>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/no_stroller.svg`} alt="검색결과 없음" />
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          노키즈존
        </PicTexts>
        </PicInformation>
        <PicInformation>
        <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/barcode_scanner.svg`} alt="검색결과 없음" />
        <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
          제로페이
        </PicTexts>
        </PicInformation>
        </Information>

        <TimInformation>
        <Texts $margintopPC={'0'} $margintopMB={'0'}>
          운영정보
        </Texts>
        <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/calendar_month.svg`} alt="검색결과 없음" />
        <TimeInfo>
          월 10:00 - 20:00<br />
          화 10:00 - 20:00<br />
          수 정기 휴무<br />
          목 10:00 - 20:00<br />
          금 10:00 - 20:00<br />
          토 9:00 - 22:00<br />
          일 정기 휴무
        </TimeInfo>
        </TimInformation>

        <TimInformation>
        <Texts $margintopPC={'0'} $margintopMB={'0'}>
            위치&ensp;&ensp;&ensp;&nbsp;
        </Texts>
        <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/location_on.svg`} alt="검색결과 없음" />
        <TimeInfo>
            서울특별시 마포구 성미산로 155, 1층
        </TimeInfo>
        </TimInformation>

        

        <TimInformation>
        <Texts $margintopPC={'0'} $margintopMB={'0'}>
          전화번호
        </Texts>
        <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/call.svg`} alt="검색결과 없음" />
        <TimeInfo>
            010-0000-0000
        </TimeInfo>
        </TimInformation>
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
  height: 41.9rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    border-radius: 4rem 4rem 0rem 0rem;
    bottom: 0rem;
    width: 100%;
    height: 90%;
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
  color: black;
  position: relative;
  margin-top: 5.6rem;
  margin-left: auto;
  margin-right: auto;
  font-family: 'SF Pro';
  font-size: 2rem;
  font-weight: 510;
  wordWrap: 'break-word'

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Information = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const PicTexts = styled.div<{ $margintopPC: string; $margintopMB: string }>`
  position: relative;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 0.8rem;
  font-weight: 500;
  wordWrap: 'break-word';
  margin-top: 0.8rem;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0;

  @media (max-width: 768px) {
  font-size: 3rem;
  margin-top: ${(props) => props.$margintopMB};
  margin-left: 6.5rem;
  }
`;

const PicInformation = styled.div`
    left: 0;
    top: 0;
    position: relative;
    margin-top: 3.2rem;
    text-align: relative;

`;

const Image = styled.img`
  width: 24;
  height: 24;
  position: relative;
  padding: 0rem 2.4rem 0rem 2.4rem;

`;

const InfoImage = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    position: relative;
    margin: 0rem 0.8rem 0rem 1.6rem;

`;

const TimeInfo = styled.div`
  color: black;
  font-size: 12px;
  font-family: 'Noto Sans';
  font-weight: 400;

  
`;

const TimInformation = styled.div`
  color: black;
  font-size: 12px;
  font-family: 'Noto Sans';
  font-weight: 400;
  word-wrap: break-word;
  height: 11.2rem;
  width: 29.2rem;
  margin-left: 13.8rem;
  margin-top: 3.2rem;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;




const Texts = styled.div<{ $margintopPC: string; $margintopMB: string }>`
  position: relative;
  margin-top: ${(props) => props.$margintopPC};
  width: auto;

  justify-content: space-between;
  align-items: flex-start;
  white-space: nowrap;


    // 운영정보
    color: black;
    font-size: 1.2rem;
    fontFamily: 'Noto Sans';
    font-Weight: 600;
    word-wrap: 'break-word'

  @media (max-width: 768px) {
  font-size: 3rem;
  margin-top: ${(props) => props.$margintopMB};
  margin-left: 6.5rem;
  }
`;

export default DetailPopup;
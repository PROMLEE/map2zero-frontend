import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { StoreState } from '../../recoil/StoreDetail/StoresState';
import { useEffect, useRef, useState } from 'react';
import { detailModalState } from '../../recoil';

export const DetailPopup = () => {
  const storeDetail = useRecoilValue(StoreState);
  const [storeInfo, setstoreInfo] = useState([false, false, false, false, false]);
  const setModal = useSetRecoilState(detailModalState);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModal(false);
    }
  };

  useEffect(() => {
    for (let tag in storeDetail.store_tags) {
      const newInfo = [...storeInfo];
      newInfo[storeDetail.store_tags[tag].id - 1] = true;
      setstoreInfo(newInfo);
    }
  });

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  // 뒤로가기 버튼 누를 시 모달 닫기
  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', () => setModal(false));
    return () => {
      window.removeEventListener('popstate', () => setModal(false));
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
          {storeInfo[0] ? (
            <PicInformation>
              <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/pets.svg`} />
              <PicTexts>반려동물 동반</PicTexts>
            </PicInformation>
          ) : null}
          {storeInfo[1] ? (
            <PicInformation>
              <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/local_parking.svg`} />
              <PicTexts>주차가능</PicTexts>
            </PicInformation>
          ) : null}{' '}
          {storeInfo[2] ? (
            <PicInformation>
              <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/valve.svg`} />
              <PicTexts>리필스테이션</PicTexts>
            </PicInformation>
          ) : null}{' '}
          {storeInfo[3] ? (
            <PicInformation>
              <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/no_stroller.svg`} />
              <PicTexts>노키즈존</PicTexts>
            </PicInformation>
          ) : null}{' '}
          {storeInfo[4] ? (
            <PicInformation>
              <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/barcode_scanner.svg`} />
              <PicTexts>제로페이</PicTexts>
            </PicInformation>
          ) : null}
        </Information>

        <TimInformation>
        <Texts $margintopPC={'0'} $margintopMB={'0'}>
          운영정보
        </Texts>
        <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/calendar_month.svg`}/>
        
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
          <Texts>위치&ensp;&ensp;&ensp;&nbsp;</Texts>
          <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/location_on.svg`} />
          <TimeInfo>
            {storeDetail.address.province} {storeDetail.address.city} {storeDetail.address.road_name}
          </TimeInfo>
        </TimInformation>
        <TimInformation>
          <Texts>전화번호</Texts>
          <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/call.svg`} />
          <TimeInfo>010-0000-0000</TimeInfo>
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
  z-index: 4;
  background: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const InfoDiv = styled.div`
  height: 20px;
  @media (max-width: 768px) {
    height: 17px;
  }
`;

const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 5;
  width: 60.8rem;
  height: 41.9rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    width: 327px;
    height: 374px;
    border-radius: 16px;
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
  margin: 56px auto 0 auto;
  font-size: 20px;
  font-weight: 510;
  justify-content: center;
  @media (max-width: 768px) {
    margin-left: 12.4rem;
    margin-right: 12.4rem;
    justify-content: center;
    text-align: center;
  }
`;

const Information = styled.div`
  margin-top: 2rem;
  justify-content: center;
  width: 100%;
  text-align: center;
  display: flex;
  gap: 3rem;
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const PicTexts = styled.div`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.8rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PicInformation = styled.div`
  left: 0;
  top: 0;
  position: relative;
  text-align: flex;
  height: 4.3rem;
  @media (max-width: 768px) {
    width: 13rem;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

const InfoImage = styled.img`
  width: 12px;
  height: 12px;
  margin: 0rem 0.8rem 0rem 1.6rem;
  @media (max-width: 768px) {
    margin: 0rem 2rem 0rem 4rem;
  }
`;

const TimeInfo = styled.div`
  color: black;
  font-size: 1.2rem;
  font-weight: 400;
  div {
    height: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    div {
      height: 3.7rem;
    }
  }
`;

const TimInformation = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 400;
  word-wrap: break-word;
  height: 112px;
  width: 292px;
  margin-left: 138px;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    font-size: 4rem;
    margin-top: 24px;
    margin-left: 24px;
  }
`;

const Texts = styled.div`
  position: relative;
  width: auto;
  font-weight: 600;
  justify-content: space-between;
  align-items: flex-start;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export default DetailPopup;

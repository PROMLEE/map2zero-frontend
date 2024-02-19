import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { shareModalState } from '../../recoil';
import { useEffect, useRef } from 'react';

export const SharePopup = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const setModal = useSetRecoilState(shareModalState);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setModal(false);
    }
  };
  const copyClipboard = async (text: string, successAction?: () => void, failAction?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      successAction && successAction();
    } catch (error) {
      failAction && failAction();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
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
  const handle = () => {
    console.log(1);
    if (navigator.share) {
      navigator.share({
        title: `Map2zero`,
        url: window.location.href,
      });
    } else {
      alert('공유하기가 지원되지 않는 환경 입니다.');
    }
  };
  return (
    <Background>
      <Modal ref={modalRef}>
        <Xbutton src={`${process.env.PUBLIC_URL}/assets/StoreDetail/xbutton.png`} onClick={() => setModal(false)} />
        <Title>공유하기</Title>
        <Information>
          <PicInformation>
            <Frame407>
              <Image
                src={`${process.env.PUBLIC_URL}/assets/DetailPopup/link.svg`}
                alt="검색결과 없음"
                onClick={() => copyClipboard(window.location.href, () => alert('링크가 클립보드에 저장되었습니다.'))}
              />
            </Frame407>
            <PicTexts>링크복사</PicTexts>
          </PicInformation>
          <PicInformation>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/DetailPopup/simple-icons_kakaotalk.svg`}
              alt="검색결과 없음"
            />
            <PicTexts>카카오톡</PicTexts>
          </PicInformation>
          <PicInformation>
            <Image src={`${process.env.PUBLIC_URL}/assets/DetailPopup/image 20.jpg`} alt="검색결과 없음" />
            <PicTexts>페이스북</PicTexts>
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
  z-index: 4;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 5;
  width: 60.8rem;
  height: 26.9rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;
  @media (max-width: 768px) {
    width: 327px;
    height: 195px;
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
  &:hover {
    cursor: pointer;
  }
`;

const PicInformation = styled.div`
  left: 0;
  top: 0;
  position: relative;
  margin-top: 3.2rem;
  text-align: relative;
  margin: 0 auto 0 auto;
`;

const PicTexts = styled.div`
  position: relative;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 10px;
  font-weight: 500;
  margin-top: 16px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0;
`;

const Information = styled.div`
  justify-content: center;
  width: 292px;
  height: 52px;
  position: relative;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin: auto;

  @media (max-width: 768px) {
    font-size: 4rem;
    width: 246px;
    height: 50px;
  }
`;

const Frame407 = styled.div`
  width: 52px;
  height: 52px;
  background: #f4ece1;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;

  @media (max-width: 768px) {
    width: 24;
    height: 24;
    position: relative;
  }
`;

import styled from 'styled-components';
import { Mobiletop } from '../components';
import ProfileImgModal from '../components/Edit/ProfileImgModal';
import ProfileEdit from '../components/Edit/ProfileEdit';
import NickNameEdit from '../components/Edit/NickNameEdit';
import KakaoEmail from '../components/Edit/KakaoEmail';
import EditButton from '../components/Edit/EditButton';
import { useRecoilValue } from 'recoil';
import { imgModalState } from '../recoil';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useRef, useState } from 'react';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function NickName() {
  const modalOpen = useRecoilValue(imgModalState);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfmodalOpen, setpdfModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setpdfModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  // 뒤로가기 버튼 누를 시 모달 닫기
  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', () => setpdfModalOpen(false));
    return () => {
      window.removeEventListener('popstate', () => setpdfModalOpen(false));
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Container $nonescroll={modalOpen}>
      {modalOpen && <ProfileImgModal />}
      <Mobiletop pagename="닉네임 설정" />
      <h1>닉네임 설정</h1>
      <ProfileEdit />
      <NickNameEdit />
      <KakaoEmail />
      <PdfButton>
        <button onClick={() => setpdfModalOpen(true)}>개인정보 처리방침</button>
        <input type="checkbox" checked={checked} onChange={({ target: { checked } }) => setChecked(checked)} />
        <div>동의</div>
      </PdfButton>
      {pdfmodalOpen && (
        <Background>
          <Modal ref={modalRef}>
            <Xbutton
              src={`${process.env.PUBLIC_URL}/assets/StoreDetail/xbutton.png`}
              onClick={() => {
                setpdfModalOpen(false);
              }}
            />
            <Document file={`${process.env.PUBLIC_URL}/assets/pdf.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={500} height={1000} />
            </Document>
            <Bottom>
              <img
                src={`${process.env.PUBLIC_URL}/assets/StoreDetail/LeftStroke.svg`}
                onClick={() => (pageNumber > 1 ? setPageNumber(pageNumber - 1) : null)}
              />
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/StoreDetail/RightStroke.svg`}
                onClick={() => (pageNumber < numPages ? setPageNumber(pageNumber + 1) : null)}
              />
            </Bottom>
          </Modal>
        </Background>
      )}
      <EditButton checked={checked} />
    </Container>
  );
}

const Container = styled.div<{ $nonescroll: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: ${(props) => (props.$nonescroll ? 'hidden' : 'auto')};
  position: ${(props) => (props.$nonescroll ? 'fixed' : 'static')};
  z-index: ${(props) => (props.$nonescroll ? 2 : 0)};
  left: 0;
  right: 0;

  h1 {
    margin-top: 5.6rem;
    color: #181818;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

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
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 5;
  width: 60.8rem;
  height: 82rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 800px;
    padding-top: 20px;
    bottom: 0;
    border-radius: 16px 16px 0 0;
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
const Bottom = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
  img {
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    gap: 4rem;
  }
`;
const PdfButton = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  font-size: 1.3rem;
  button {
    color: white;
    background-color: #1100ff71;
    width: 15rem;
    height: 4rem;
    border-radius: 1.6rem;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    margin-left: 3rem;
    font-size: 3rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  div {
    margin-left: 1rem;
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    height: 10rem;
    font-size: 4rem;
    margin-bottom: 8rem;
    button {
      color: white;
      background-color: #1100ff71;
      width: 40rem;
      height: 10rem;
      border-radius: 3rem;
    }
    input {
      margin-left: 5rem;
      width: 4rem;
      height: 4rem;
    }
    div {
      margin-left: 2.5rem;
      font-size: 3.5rem;
    }
  }
`;

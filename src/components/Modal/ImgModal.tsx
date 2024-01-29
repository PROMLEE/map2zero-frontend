import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { imgModalState } from '../../recoil';
import { preventScroll, allowScroll } from './scroll';
import AvatarEditor from 'react-avatar-editor';

Modal.setAppElement('#root');

const ImgModal = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768 ? true : false;
  const [modalOpen, setModalOpen] = useRecoilState(imgModalState);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const editorRef = useRef<AvatarEditor | null>(null);
  const [croppedImage, setCroppedImage] = useState('');
  const [scale, setScale] = useState(1);

  const handleScaleChange = (event: React.WheelEvent<HTMLDivElement>) => {
    const newScale = scale - event.deltaY * 0.01;
    setScale(Math.min(Math.max(1, newScale), 3));
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const croppedImage = canvas.toDataURL();
      setCroppedImage(croppedImage);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [modalOpen]);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImageSrc(reader.result as string);
        const img = new Image();
        img.src = reader.result as string;
      });
      reader.readAsDataURL(file);
    }
  };

  const onButtonClick = () => {
    if (imageSrc) {
      const formData = new FormData();
      formData.append('file', imageSrc);
    }
  };

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  //윈도우 크기에 따른 모바일, PC 크기
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Modal
      isOpen={modalOpen}
      style={{
        overlay: {
          backgroundColor: ' rgba(0, 0, 0, 0.3)',
          width: '100%',
          boxSizing: 'border-box',
        },
        content: {
          boxSizing: 'border-box',
          justifyContent: 'center',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '24px',
          alignItems: 'center',
          backgroundColor: 'white',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'relative',
          paddingTop: '56px',
          paddingBottom: '40px',
          ...(isMobile
            ? {
                width: '81.75rem',
              }
            : {
                width: '60.8rem',
              }),
        },
      }}
    >
      <CropContainer>
        {imageSrc && (
          <div onWheel={handleScaleChange}>
            <AvatarEditor
              ref={editorRef}
              image={imageSrc}
              width={150}
              height={150}
              borderRadius={100}
              scale={scale}
              rotate={0}
            />
          </div>
        )}
      </CropContainer>
      <FileContainer>
        <input id="fileInput" type="file" accept="image/*" onChange={onFileChange} style={{ display: 'none' }} />
        <label htmlFor="fileInput" onClick={onButtonClick}>
          파일선택
        </label>
        {fileName ? <p>{fileName}</p> : <p>선택한 파일이 없습니다</p>}
      </FileContainer>
      <MessageContainer>
        <li>사진 파일은 10MB 미만의 JPG, JPEG, PNG, GIF 파일만 업로드 가능</li>
        <li>사진 크기는 150*150 픽셀로 노출됩니다.</li>
      </MessageContainer>
      <ButtonContainer>
        <button
          onClick={modalHandler}
          style={{ color: '#848484', border: '0.5px solid #848484', background: '#FFF', marginRight: '8px' }}
        >
          취소
        </button>
        <button
          onClick={handleSave}
          style={{ color: '#FFF', border: '0.5px solid #F2F2F2', background: '#0B5C71', marginLeft: '8px' }}
        >
          등록
        </button>
      </ButtonContainer>
      <img src={croppedImage} style={{ borderRadius: 100 }} />
    </Modal>
  );
};

export default ImgModal;

const CropContainer = styled.div`
  position: relative;
  height: 200px;
`;

const FileContainer = styled.div`
  margin-top: 26px;
  display: flex;

  label {
    width: 65px;
    height: 40px;
    text-align: center;
    padding: 12px 0px;
    border-radius: 8px;
    border: 0.5px solid #e0e0e0;
    margin-right: 8px;

    color: #000;
    font-family: 'Noto Sans';
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }

  p {
    width: 209px;
    padding: 12px 8px;
    gap: 8px;
    border-radius: 8px;
    border: 0.5px solid #e0e0e0;

    color: #000;
    font-family: 'Noto Sans';
    font-size: 12px;
    font-weight: 400;
  }
`;

const MessageContainer = styled.ul`
  list-style: disc;

  li {
    margin-top: 8px;
    color: #000;
    font-family: 'Noto Sans';
    font-size: 8px;
    font-weight: 400;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 26px;
  display: flex;

  button {
    display: flex;
    padding: 16px 54px;
    border-radius: 8px;

    font-family: 'Noto Sans';
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;

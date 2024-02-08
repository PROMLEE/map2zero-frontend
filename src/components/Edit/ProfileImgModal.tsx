import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { imgModalState, profileImgState, profileNameState } from '../../recoil';
import AvatarEditor from 'react-avatar-editor';
import PinchZoom from './PinchZoom';

const ProfileImgModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(imgModalState);
  const profileImg = useRecoilValue(profileImgState);
  const [imageSrc, setImageSrc] = useState(profileImg);
  const [fileName, setFileName] = useRecoilState<string>(profileNameState);
  const editorRef = useRef<AvatarEditor | null>(null);
  const [_, setProfileImgImage] = useRecoilState(profileImgState);
  const [scale, setScale] = useState(1);
  const cropContainerRef = useRef<HTMLDivElement | null>(null);
  // 뒤로가기 버튼 누를 시 모달 닫기
  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', () => setModalOpen(false));
    return () => {
      window.removeEventListener('popstate', () => setModalOpen(false));
    };
  }, []);

  useEffect(() => {
    if (cropContainerRef.current) {
      PinchZoom({
        screen: cropContainerRef.current,
        target: cropContainerRef.current,
        setState: setScale,
        getState: () => ({ scale }),
      });
    }
  }, []);

  //이미지 확대/축소 기능
  const handleScaleChange = (event: React.WheelEvent<HTMLDivElement>) => {
    const newScale = scale - event.deltaY * 0.01;
    setScale(Math.min(Math.max(1, newScale), 3));
  };

  //수정한 이미지 등록
  const saveHandler = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const croppedImage = canvas.toDataURL();
      setProfileImgImage(croppedImage);
      setModalOpen(!modalOpen);
    }
  };

  //파일명을 저장하고, Data URL 형태로 변환
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      setScale(1);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImageSrc(reader.result as string);
        const img = new Image();
        img.src = reader.result as string;
      });
      reader.readAsDataURL(file);
    }
  };

  //파일 선택
  const onButtonClick = () => {
    if (imageSrc) {
      const formData = new FormData();
      formData.append('file', imageSrc);
    }
  };

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <BackDrop onClick={modalHandler}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <CropContainer ref={cropContainerRef}>
          {imageSrc ? (
            <div onWheel={handleScaleChange}>
              <AvatarEditor
                ref={editorRef}
                image={imageSrc}
                width={150}
                height={150}
                color={[217, 217, 217]}
                borderRadius={100}
                scale={scale}
                rotate={0}
              />
            </div>
          ) : (
            <DefaultImg>
              <div></div>
            </DefaultImg>
          )}
        </CropContainer>
        <FileContainer>
          <input id="fileInput" type="file" accept="image/*" onChange={onFileChange} style={{ display: 'none' }} />
          <label htmlFor="fileInput" onClick={onButtonClick}>
            파일선택
          </label>
          <p>{fileName}</p>
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
            onClick={saveHandler}
            disabled={imageSrc === null}
            style={{ color: '#FFF', border: '0.5px solid #F2F2F2', background: '#0B5C71', marginLeft: '8px' }}
          >
            등록
          </button>
        </ButtonContainer>
      </Modal>
    </BackDrop>
  );
};

export default ProfileImgModal;

const BackDrop = styled.div`
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  overflow-y: scroll;
  z-index: 3;
  padding-top: 56px;
  padding-bottom: 40px;
  border-radius: 24px;
  width: 60.8rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 81.75rem;
  }
`;

const CropContainer = styled.div`
  position: relative;
  height: 200px;
`;

const DefaultImg = styled.div`
  width: 200px;
  height: 200px;
  padding: 25px;
  background: #d9d9d9;

  > div {
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 100%;
  }
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
    font-family: 'Noto Sans KR';
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
    font-family: 'Noto Sans KR';
    font-size: 12px;
    font-weight: 400;
  }
`;

const MessageContainer = styled.ul`
  list-style: disc;

  li {
    margin-top: 8px;
    color: #000;
    font-family: 'Noto Sans KR';
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

    font-family: 'Noto Sans KR';
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }
`;

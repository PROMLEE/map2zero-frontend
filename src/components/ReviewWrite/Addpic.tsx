import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

export const Addpic = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => fileArray.concat(prevImages));
      e.target.value = '';
    }
  };

  return (
    <PicBox>
      {images.map((image, index) => (
        <Pic key={index} src={image} alt={`Uploaded ${index}`} />
      ))}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        multiple
        style={{ display: 'none' }}
        id="imageInput"
      />
      <CameraButton htmlFor="imageInput" style={{ cursor: 'pointer' }}>
        <Pic src={`${process.env.PUBLIC_URL}/assets/StoreDetail/new_pic.png`} />
      </CameraButton>
    </PicBox>
  );
};

const PicBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.4rem;
  width: 48.4rem;
  gap: 1rem;
  margin-left: 6.2rem;
  @media (max-width: 768px) {
    gap: 2rem;
    margin-top: 3.5rem;
    width: 90%;
    margin-left: 6rem;
  }
`;
const CameraButton = styled.label`
  width: 6.6rem;
  height: 6.6rem;
  @media (max-width: 768px) {
    width: 16.5rem;
    height: 16.5rem;
  }
`;
const Pic = styled.img`
  width: 6.6rem;
  height: 6.6rem;
  border-radius: 0.8rem;
  @media (max-width: 768px) {
    width: 16.5rem;
    height: 16.5rem;
    border-radius: 2rem;
  }
`;

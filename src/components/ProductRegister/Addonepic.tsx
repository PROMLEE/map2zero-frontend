import { useState, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ProductImg } from '../../recoil/Products/Products';

export const Addonepic = () => {
  const [images, setImages] = useState<any[]>([]);
  const [reviewState, setreviewState] = useRecoilState(ProductImg);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setreviewState(fileArray.concat(reviewState));
      setImages(fileArray);
    }
  };

  return (
    <PicBox>
      {images.length < 1 ? (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="imageInput"
          />
          <CameraButton htmlFor="imageInput" style={{ cursor: 'pointer' }}>
            <Pic src={`${process.env.PUBLIC_URL}/assets/StoreDetail/new_pic.svg`} />
          </CameraButton>
        </>
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="imageInput"
          />
          <CameraButton htmlFor="imageInput" style={{ cursor: 'pointer' }}>
            {images.map((image, index) => (
              <Pic key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
            ))}
          </CameraButton>
        </>
      )}
    </PicBox>
  );
};

const PicBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.4rem;
  width: 13.4rem;
  margin-left: 6.2rem;
  @media (max-width: 768px) {
    margin-top: 3.5rem;
    width: 90%;
    margin-left: 6rem;
  }
`;
const CameraButton = styled.label`
  width: 13.4rem;
  height: 13.4rem;
  @media (max-width: 768px) {
    width: 30rem;
    height: 30rem;
  }
`;
const Pic = styled.img`
  width: 13.4rem;
  height: 13.4rem;
  border-radius: 0.8rem;
  @media (max-width: 768px) {
    width: 30rem;
    height: 30rem;
    border-radius: 2rem;
  }
`;

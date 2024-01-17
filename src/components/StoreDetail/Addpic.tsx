// import { useState } from 'react';

// export const Addpic = () => {
//   const [imageSrc, setImageSrc]: any = useState(null);
//   const onUpload = (e: any) => {
//     const file = e.target.files;
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     return new Promise<void>((resolve) => {
//       reader.onload = () => {
//         setImageSrc(reader.result || null); // 파일의 컨텐츠
//         resolve();
//       };
//     });
//   };

//   return (
//     <>
//       <input multiple type="file" onChange={(e) => onUpload(e)} />
//       <CameraButton src={`${process.env.PUBLIC_URL}/assets/StoreDetail/pic_no.png`} />
//       <PicBox>
//         <Pic src={imageSrc} />
//       </PicBox>
//     </>
//   );
// };

// const PicBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 90%;
//   margin-left: 6rem;
// `;
// const CameraButton = styled.img`
//   @media (max-width: 768px) {
//     width: 100%;
//     height: 12rem;
//     padding: 1.5rem 0rem;
//   }
// `;

import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

export const Addpic: React.FC = () => {
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
      {images.map((image, index) => (
        <Pic key={index} src={image} alt={`Uploaded ${index}`} />
      ))}
    </PicBox>
  );
};

const PicBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 3.5rem;
  gap: 2rem;
  width: 90%;
  margin-left: 6rem;
`;
const CameraButton = styled.label`
  width: 16.5rem;
  height: 16.5rem;
`;
const Pic = styled.img`
  width: 16.5rem;
  height: 16.5rem;
  border-radius: 2rem;
  background: var(--gray, #e0e0e0);
`;

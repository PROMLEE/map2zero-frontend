import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { imgModalState, profileImgState } from '../../recoil';

const ProfileEdit = () => {
  const DEFAULT_IMG = `${process.env.PUBLIC_URL}/assets/Edit/profile.png`;
  const profileImg = useRecoilValue(profileImgState);
  const [modalOpen, setModalOpen] = useRecoilState(imgModalState);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ImageDiv>
      {profileImg ? <ProfileImg src={profileImg} alt="프로필" /> : <ProfileImg src={DEFAULT_IMG} alt="프로필" />}
      <input style={{ display: 'none' }} id="imageInput" />
      <label htmlFor="imageInput" onClick={modalHandler}>
        {profileImg ? (
          <img src={`${process.env.PUBLIC_URL}/assets/Edit/edit.svg`} alt="edit" />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/assets/Edit/plus.svg`} alt="plus" />
        )}
      </label>
    </ImageDiv>
  );
};

export default ProfileEdit;

const ProfileImg = styled.img`
  width: 15.8rem;
  height: 15.8rem;
  border-radius: 100px;

  @media (max-width: 768px) {
    width: 37.75rem;
    height: 37.75rem;
  }
`;

const ImageDiv = styled.div`
  margin-top: 8rem;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 24rem;
  }

  label {
    position: absolute;
    bottom: 0.5rem;
    right: 0.3rem;
    width: 30px;
    height: 30px;
    padding: 8px;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const PersonalInfo = () => {
  const navigate = useNavigate();

  const onSettingHandler = () => {
    navigate('/setting');
  };
  return (
    <Wrap>
      <div>
        <div>
          <PersonalImg src="assets/white.png" alt="이미지"></PersonalImg>
        </div>
        <InfoWrap>
          <Name>사용자 이름</Name>
          <SocialWrap>
            <SocialIcon src="assets/kakao.png" alt="소셜아이콘"></SocialIcon>
            <Email>계정아이디@gamil.com</Email>
          </SocialWrap>
        </InfoWrap>
      </div>
      <div onClick={onSettingHandler}>
        <SettingsIcon src="assets/settings.png" alt="계정관리"></SettingsIcon>
        <Settings>계정 관리</Settings>
      </div>
    </Wrap>
  );
};

export default PersonalInfo;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 7rem 0 4rem 0;
  & > div:first-child {
    display: flex;
  }
  & > div:last-child {
    display: flex;
    height: 100%;
    margin-top: 12rem;
    align-items: center;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    background-color: rgba(12, 140, 255, 1);
    width: 100%;
    height: 36rem;

    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 7.5rem;
    border-bottom-right-radius: 7.5rem;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3rem;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin: 0 0 2rem 0;
  @media (max-width: 768px) {
    font-size: 3.5rem;
    color: #fff;
  }
`;

const PersonalImg = styled.img`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  object-fit: cover;
  width: 16.2rem;
  border-radius: 50%;
  border: 0;
  height: 16.2rem;

  @media (max-width: 768px) {
    width: 16rem;
    height: 16rem;
    margin: 2rem;
  }
`;

const SocialWrap = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.8);
    width: 59.75rem;
    height: 5.5rem;
    border-radius: 1rem;
    padding: 1rem;
  }
`;
const SocialIcon = styled.img`
  width: 3.2rem;
  @media (max-width: 768px) {
    width: 3.5rem;
    margin: 1rem;
  }
`;
const Email = styled.p`
  font-size: 1.6rem;
  margin-left: 0.6rem;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
const SettingsIcon = styled.img`
  width: 2rem;
  margin-right: 0.9rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Settings = styled.p`
  font-size: 1.4rem;
  font-weight: bold;

  color: rgba(86, 86, 86, 1);
  @media (max-width: 768px) {
    display: none;
  }
`;

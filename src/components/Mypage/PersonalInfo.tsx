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
  height: 80%;
  margin-bottom: 2rem;
  & > div:first-child {
    display: flex;
    margin-top: 4rem;
  }
  & > div:last-child {
    display: flex;
    height: 100%;
    margin-top: 11rem;
    align-items: center;
    cursor: pointer;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1.5rem;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0 0 0.8rem 0;
`;

const PersonalImg = styled.img`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  object-fit: cover;
  width: 10.13rem;
  border-radius: 50%;
  border: 0;
  height: 10.13rem;
`;

const SocialWrap = styled.div`
  align-items: center;
  display: flex;
`;
const SocialIcon = styled.img`
  width: 1.6rem;
`;
const Email = styled.p`
  font-size: 1rem;
  margin-left: 0.3rem;
`;
const SettingsIcon = styled.img`
  width: 1.2rem;
  margin-right: 0.5rem;
`;
const Settings = styled.p`
  font-size: 0.88rem;
  font-weight: bold;
  margin-right: 2rem;
  color: rgba(86, 86, 86, 1);
`;

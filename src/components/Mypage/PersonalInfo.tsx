import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { InfoStateSelector, ManagerStoreSelector } from '../../recoil/Mypage/myPageState';
import { managerStoreType } from '../../recoil/Mypage/myPageStateType';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const info = useRecoilValue(InfoStateSelector);

  const managerStore: managerStoreType = info.is_manager ? useRecoilValue(ManagerStoreSelector) : '';

  console.log(managerStore);

  const onSettingHandler = () => {
    navigate('/setting');
  };

  return (
    <Wrap>
      <div>
        <div>
          <PersonalImg src={info.photo.url} alt="이미지"></PersonalImg>
        </div>
        <InfoWrap>
          {info.is_manager && managerStore && <StoreName>{managerStore.name}</StoreName>}
          <Name $hasstorename={!!info.is_manager}>{info.nickname}</Name>
          <SocialWrap>
            <SocialIcon src={`${process.env.PUBLIC_URL}/assets/MyPage/${info.type}.png`} alt="소셜아이콘"></SocialIcon>
            <Email>{info.email}</Email>
          </SocialWrap>
        </InfoWrap>
      </div>
      <div onClick={onSettingHandler}>
        <SettingsIcon src={`${process.env.PUBLIC_URL}/assets/MyPage/settings.png`} alt="계정관리"></SettingsIcon>
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
    background-color: #74b69d;
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
const StoreName = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1.3rem;
    color: #fff;
  }
`;
const Name = styled.h2<{ $hasstorename: boolean }>`
  font-size: ${(props) => (props.$hasstorename ? '1.7rem' : '2.8rem')};
  font-weight: bold;
  margin: 0 0 2rem 0;
  @media (max-width: 768px) {
    font-size: ${(props) => (props.$hasstorename ? '2.5rem' : '3.5rem')};
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

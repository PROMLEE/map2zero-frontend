import styled from 'styled-components';
import { InfoStateSelector } from '../../recoil/Mypage/myPageState';
import { useRecoilValue } from 'recoil';

const KakaoEmail = () => {
  const info = useRecoilValue(InfoStateSelector);

  return (
    <KakaoDiv>
      <Kakao>
        <img src={`${process.env.PUBLIC_URL}/assets/Edit/kakao.svg`} alt="kakao" />
      </Kakao>
      <span>계정아이디 {info.email}</span>
    </KakaoDiv>
  );
};

export default KakaoEmail;

const KakaoDiv = styled.div`
  margin-bottom: 6.4rem;
  display: flex;
  width: 29.2rem;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #f2f2f2;

  @media (max-width: 768px) {
    width: 81.75rem;
    margin-bottom: 7.75rem;
  }

  span {
    overflow: hidden;
    color: #565656;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Noto Sans KR';
    font-size: 10px;
    font-weight: 400;
  }
`;

const Kakao = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #fee500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

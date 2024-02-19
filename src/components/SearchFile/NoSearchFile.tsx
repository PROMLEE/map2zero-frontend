import styled from 'styled-components';
import {} from '../../recoil';

const NoSearchFile = () => {
  return (
    <Wrap>
      <NoSearch src={`${process.env.PUBLIC_URL}assets/Search/nosearchimage.jpg`} alt="검색결과 없음" />
      <NoSearchText>검색 결과 없음</NoSearchText>
    </Wrap>
  );
};

export default NoSearchFile;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoSearch = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 119px;

  @media (max-width: 768px) {
    margin-top: 168px;
  }
`;

const NoSearchText = styled.p`
  margin-top: 16px;
  color: #cccccc;
  font-size: 14px;
  font-weight: 500px;
`;

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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NoSearch = styled.img`
  width: 120px;
  height: 120px;
  margin: 119px 900px 16px 900px;
`;

const NoSearchText = styled.p`
  color: #cccccc;
  font-size: 14px;
  font-weight: 500px;
  margin-bottom: 298px;
`;

export default NoSearchFile;

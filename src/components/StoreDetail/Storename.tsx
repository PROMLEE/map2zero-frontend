import styled from 'styled-components';

export const StoreName = () => {
  return (
    <DetailBox>
      <Name>매장명</Name>
      <div>
        <Link src={`${process.env.PUBLIC_URL}/assets/StoreDetail/share.png`} />
        <Link src={`${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark.png`} />
      </div>
    </DetailBox>
  );
};
const DetailBox = styled.div`
  display: flex;
  width: 92.4rem;
  height: 4.5rem;
  margin-top: 3.2rem;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  align-items: center;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 2rem;
  font-weight: 600;
`;
const Link = styled.img`
  width: 3.8rem;
  height: 4rem;
`;

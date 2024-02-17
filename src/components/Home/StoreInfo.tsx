import styled from 'styled-components';
const StoreInfo = ({ item }: { item: any }) => {
  return (
    <Info>
      <h1>{item.name}</h1>
      <div>
        <Star src={`${process.env.PUBLIC_URL}/assets/Home/star.svg`} alt={'스타'} />
        <Score>{item.average_score}</Score>
        <Count>{`(${item.review_cnt})`}</Count>
      </div>
      <Address>{`${item.address.province} ${item.address.city} ${item.address.road_name}`}</Address>
    </Info>
  );
};

export default StoreInfo;

const Info = styled.div`
  width: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 768px) {
    height: 31rem;
    padding: 6rem;
    > h1 {
      font-size: 5rem;
      margin-bottom: 3rem;
    }
    > div {
      margin-bottom: 3rem;
    }
  }
`;

const Star = styled.img`
  width: 2rem;
  height: 2rem;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const Score = styled.p`
  font-size: 1.4rem;
  color: #ff6464;
  margin: 0.2rem 1rem 0 1rem;
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin: 0.2rem 3rem 0 3rem;
  }
`;
const Count = styled.p`
  font-size: 1.4rem;
  color: #e0e0e0;
  margin-top: 0.2rem;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Address = styled.p`
  font-size: 1.2rem;
  color: #565656;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

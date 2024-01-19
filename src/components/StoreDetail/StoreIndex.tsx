import styled from 'styled-components';
import { StoreName, Linkbuttons, DetailBox } from '../StoreDetail';

export const StoreIndex = () => {
  return (
    <StoreIndexBox>
      <StoreName />
      <DetailBox />
      <Linkbuttons />
    </StoreIndexBox>
  );
};
const StoreIndexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 41%;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

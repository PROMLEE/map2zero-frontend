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
`;

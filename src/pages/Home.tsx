import styled from 'styled-components';
import { Mobiletop } from '../components';
import { AdSlider, Items, StoreInfo } from '../components/Home';
import HomeTap from '../components/Home/HomeTap';

export default function Homepage() {
  return (
    <ContentWrap>
      <Mobiletop pagename="홈 화면" />
      <AdSlider />
      <HomeTap></HomeTap>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding-bottom: 20.8rem;

  @media (max-width: 768px) {
    padding-bottom: 52rem;
  }
`;

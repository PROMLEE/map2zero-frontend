import styled from 'styled-components';
import { Example, Mobiletop } from '../components';

export default function Homepage() {
  return (
    <HomeBackground>
      <Mobiletop pagename="홈 화면" />
      <Example />
    </HomeBackground>
  );
}
const HomeBackground = styled.div`
  position: relative;
  height: 95vh;
  width: 100vw;
  overflow: hidden;
`;

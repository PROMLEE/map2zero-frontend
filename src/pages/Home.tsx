import styled from 'styled-components';
import { Example, Mobiletop } from '../components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UserInfoState } from '../recoil';

export default function Homepage() {
  const userinfo = useRecoilValue(UserInfoState);
  console.log(userinfo);
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

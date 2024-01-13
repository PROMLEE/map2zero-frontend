import styled from 'styled-components';
import { Loginbutton, Mobiletop } from '../../components';

export default function Login() {
  return (
    <LoginBackground>
      <Mobiletop pagename="로그인" />
      <Loginbutton />
    </LoginBackground>
  );
}
const LoginBackground = styled.div`
  position: relative;
  height: 95vh;
  width: 100vw;
  overflow: hidden;
`;

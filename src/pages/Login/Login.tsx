import styled from 'styled-components';
import { Loginbutton } from '../../components';

export default function Login() {
  return (
    <LoginBackground>
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

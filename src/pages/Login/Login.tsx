import styled from 'styled-components';
import { Loginbutton } from '../../components';
import backgroundimg from '../../images/Login/backgroundimg.png';
export default function Login() {
  return (
    <LoginBackground>
      <Loginbutton />
    </LoginBackground>
  );
}
const LoginBackground = styled.div`
  background-image: url(${backgroundimg});
  height: 90vh;
  padding-top: 144px;
`;

import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import backbutton from '../images/Navbar/backbutton.png';
import settingimg from '../images/Navbar/settingimg.png';

interface Props {
  pagename: string;
}
export default function Mobiletop(props: Props) {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };
  return (
    <>
      <Navimg src={backbutton} onClick={onClickBtn} $left="16px" $right="auto" $width="30.625px" $height="40px" />
      <Link to="/mypage">
        <Navimg src={settingimg} $left="auto" $right="16px" $width="40px" $height="40px" />
      </Link>
      <Mobiletopbar>{props.pagename}</Mobiletopbar>
    </>
  );
}

const Mobiletopbar = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  top: 16px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'SF Pro';
  font-size: 16px;
  font-style: normal;
  font-weight: 510;
  line-height: normal;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Navimg = styled.img<{ $left: string; $right: string; $width: string; $height: string }>`
  display: block;
  position: fixed;
  top: 16px;
  left: ${($props) => $props.$left};
  right: ${($props) => $props.$right};
  width: ${($props) => $props.$width};
  height: ${($props) => $props.$height};
  z-index: 1;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

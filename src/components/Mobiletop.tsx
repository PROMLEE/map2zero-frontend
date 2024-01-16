import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
      <Navimg src={'assets/Navbar/backbutton.png'} onClick={onClickBtn} />
      <Mobiletopbar>{props.pagename}</Mobiletopbar>
      <Box />
    </>
  );
}

const Mobiletopbar = styled.div`
  position: fixed;
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Box = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  top: 16px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Navimg = styled.img`
  display: block;
  position: fixed;
  top: 16px;
  left: 16px;
  width: 30.625px;
  height: 40px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

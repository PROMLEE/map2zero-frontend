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
      <Navimg src={`${process.env.PUBLIC_URL}/assets/Navbar/backbutton.png`} onClick={onClickBtn} />
      <Mobiletopbar>{props.pagename}</Mobiletopbar>
      <Box />
    </>
  );
}

const Mobiletopbar = styled.div`
  position: fixed;
  width: 100%;
  height: 11rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'SF Pro';
  font-size: 4rem;
  font-style: normal;
  font-weight: 510;
  line-height: normal;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Box = styled.div`
  position: relative;
  width: 100%;
  height: 11rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Navimg = styled.img`
  display: block;
  position: fixed;
  top: 0.5rem;
  left: 4rem;
  width: 7.65625rem;
  height: 10rem;
  z-index: 1;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

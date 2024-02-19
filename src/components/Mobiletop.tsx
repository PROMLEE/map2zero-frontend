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
      <Mobiletopbar>{props.pagename}</Mobiletopbar>
      <Navimg src={`${process.env.PUBLIC_URL}/assets/Navbar/backbutton.svg`} onClick={onClickBtn} />
      <Box $ismypage={props.pagename === '마이페이지' ? 'true' : 'false'} />
    </>
  );
}

const Mobiletopbar = styled.div`
  position: fixed;
  width: 100%;
  height: 11rem;
  background-color: transparent;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 600;
  z-index: 4;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const Box = styled.div<{ $ismypage: string }>`
  position: relative;
  width: 100%;
  height: 11rem;
  display: none;
  background-color: ${(props) => (props.$ismypage ? '#74b69d' : 'transparent')};
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Navimg = styled.img`
  display: none;
  position: fixed;
  padding: 2.5rem;
  top: 0rem;
  left: 4rem;
  width: 7.65625rem;
  height: 10rem;
  z-index: 4;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

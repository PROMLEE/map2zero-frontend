import styled from 'styled-components';

export const Gpsbutton = () => {
  return (
    <a href="#">
      <Gpsimg src={`${process.env.PUBLIC_URL}/assets/Map/Gps.svg`} />
    </a>
  );
};
const Gpsimg = styled.img`
  width: 4rem;
  margin-top: 3rem;
  margin-right: 3rem;
  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;

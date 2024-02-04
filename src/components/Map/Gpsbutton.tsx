import styled from 'styled-components';

export const Gpsbutton = () => {
  return (
    <a href="#">
      <Gpsimg src="/assets/Map/Gps.svg" />
    </a>
  );
};
const Gpsimg = styled.img`
  width: 4rem;
  margin-bottom: 42vh;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    width: 10rem;
    margin-right: 2rem;
  }
`;

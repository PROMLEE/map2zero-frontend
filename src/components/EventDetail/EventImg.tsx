import styled from 'styled-components';

export const EvnetImg = () => {
  return <Starbox></Starbox>;
};

const Starbox = styled.img`
  background-color: #d9d9d9;
  width: 100%;
  height: 48rem;
  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`;

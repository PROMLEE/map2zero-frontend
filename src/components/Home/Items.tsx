import styled from 'styled-components';

const Items = () => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default Items;

const Container = styled.div`
  display: flex;
  height: 39.1rem;
  width: 100%;
  padding: 3rem 0 3rem 1rem;
  overflow-x: auto;
  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

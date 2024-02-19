import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorCode = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
  color: #333;
`;

const Message = styled.p`
  font-size: 24px;
  color: #666;
`;

const BackLink = styled.a`
  margin-top: 20px;
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Err = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <Message>페이지를 찾을 수 없습니다.</Message>
      <BackLink href="/">홈페이지로 돌아가기</BackLink>
    </NotFoundContainer>
  );
};

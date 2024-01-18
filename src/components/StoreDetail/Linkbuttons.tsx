import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const Linkbuttons = () => {
  const phonenumber = '010-0000-0000';
  const copyClipboard = async (text: string, successAction?: () => void, failAction?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      successAction && successAction();
    } catch (error) {
      failAction && failAction();
    }
  };
  return (
    <PicBox>
      <Button href="#">
        <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/location.png`} />
        <ButtonText>위치</ButtonText>
      </Button>
      <Line />
      {isMobile ? (
        <>
          <Button href={'tel:' + '010-0000-0000'}>
            <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/call.png`} />
            <ButtonText>전화</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <Button
            href="#"
            onClick={() => copyClipboard(phonenumber, () => alert('전화번호가 클립보드에 저장되었습니다.'))}
          >
            <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/call.png`} />
            <ButtonText>전화</ButtonText>
          </Button>
        </>
      )}
      <Line />
      <Button href="#">
        <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/storefront.png`} />
        <ButtonText>매장정보</ButtonText>
      </Button>
    </PicBox>
  );
};

const PicBox = styled.div`
  margin-top: 1.6rem;
  display: flex;
  width: 92.4rem;
  height: 6.3rem;
  padding: 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid;
  border-color: #f2f2f2;
  &:hover {
    cursor: pointer;
  }
`;
const Button = styled.a`
  width: 29.7333rem;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  text-decoration-line: none;
`;
const ButtonImg = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;
const ButtonText = styled.div`
  color: #000;
  height: 1.6rem;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Line = styled.div`
  height: 1.6rem;
  width: 1px;
  background-color: #848484;
`;

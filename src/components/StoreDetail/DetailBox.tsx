import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { StoreState } from '../../recoil';

export const DetailBox = () => {
  const storeDetail = useRecoilValue(StoreState);
  return (
    <Details>
      <ReviewIndex>
        <Img src={`${process.env.PUBLIC_URL}/assets/StoreDetail/star.svg`} $height={'2rem'} $heightm={'5rem'} />
        <Text $color={'#FF6464'}>{storeDetail.average_score}</Text>
        <ReviewButton
          onClick={() => {
            window.scrollTo({ top: 1000, behavior: 'smooth' });
          }}
        >
          <Text $color={'#565656'}>리뷰({storeDetail.review_cnt})</Text>
          <Img src={`${process.env.PUBLIC_URL}/assets/StoreDetail/arrow.svg`} $height={'1.1rem'} $heightm={'2.75rem'} />
        </ReviewButton>
      </ReviewIndex>
      <Intro>{storeDetail.description}</Intro>
      <Links>
        <Link>
          <Name>인스타그램</Name>
          <Name>홈페이지</Name>
        </Link>
        <Link>
          <URL href={storeDetail.instagram_url}>{storeDetail.instagram_url}</URL>
          <URL href={storeDetail.homepage_url}>{storeDetail.homepage_url}</URL>
        </Link>
      </Links>
    </Details>
  );
};

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 92.4rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ReviewIndex = styled.div`
  display: flex;
  height: 2.6rem;
  gap: 0.8rem;
  align-items: center;
  @media (max-width: 768px) {
    height: 5rem;
    gap: 2rem;
  }
`;
const Img = styled.img<{ $height: string; $heightm: string }>`
  height: ${(props) => props.$height};
  @media (max-width: 768px) {
    height: ${(props) => props.$heightm};
  }
`;
const Text = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-family: 'Noto Sans KR';
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;
const ReviewButton = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;
const Intro = styled.div`
  white-space: pre-line;
  margin-top: 1.95rem;
  color: #848484;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    margin-top: 4rem;
    width: 100%;
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const Links = styled.div`
  margin-top: 2.9rem;
  display: flex;
  gap: 1.6rem;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    gap: 4rem;
  }
`;
const Link = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;
const Name = styled.div`
  color: #565656;
  height: 1.4rem;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    height: 3.5rem;
    font-size: 2.5rem;
    font-weight: 400;
  }
`;
const URL = styled.a`
  color: #0b5c71;
  height: 1.4rem;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration-line: underline;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 3.5rem;
    font-size: 3rem;
    font-weight: 400;
  }
`;

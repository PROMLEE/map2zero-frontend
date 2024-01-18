import styled from 'styled-components';

export const DetailBox = () => {
  const text =
    "지구를 위한 첫걸음, 지구샵입니다.\n<지구샵 제로웨이스트홈>은 일상 속 제로웨이스트 가치를\n더 가깝게 느끼고\n친환경 소비를 실천할 수 있도록 독려하고자\n'제로웨이스터의 집'이라는 컨셉으로 공간을 구성했습니다.";
  return (
    <Details>
      <ReviewIndex>
        <Img src={`${process.env.PUBLIC_URL}/assets/StoreDetail/star.png`} $height={'2rem'} />
        <Text $color={'#FF6464'}>4.5</Text>
        <Text $color={'#565656'}>리뷰(42)</Text>
        <Img src={`${process.env.PUBLIC_URL}/assets/StoreDetail/arrow.png`} $height={'1.1rem'} />
      </ReviewIndex>
      <Intro>{text}</Intro>
      <Links>
        <Link>
          <Name>인스타그램</Name>
          <Name>홈페이지</Name>
        </Link>
        <Link>
          <URL>@aaaaa</URL>
          <URL>http://dddd</URL>
        </Link>
      </Links>
    </Details>
  );
};

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 92.4rem;
`;
const ReviewIndex = styled.div`
  display: flex;
  height: 2.6rem;
  gap: 0.8rem;
  align-items: center;
`;
const Img = styled.img<{ $height: string }>`
  height: ${(props) => props.$height};
`;
const Text = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-family: 'Noto Sans KR';
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;
const Intro = styled.div`
  white-space: pre-line;
  margin-top: 1.95rem;
  color: #848484;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
`;

const Links = styled.div`
  margin-top: 2.9rem;
  display: flex;
  gap: 1.6rem;
`;
const Link = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Name = styled.div`
  color: #565656;
  height: 1.4rem;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
`;
const URL = styled.div`
  color: #0b5c71;
  height: 1.4rem;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration-line: underline;
`;

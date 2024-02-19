import styled from 'styled-components';
import { Mobiletop } from '../components';

import { Nearest, Items } from '../components/Home';
import { BookMarksState } from '../recoil/Home/HomeState';
import { useRecoilValue } from 'recoil';
import HomeSlider from '../components/Home/Slider/HomeSlider';
import { UserInfoState } from '../recoil';
import { ScrollToTop } from '../components';

export default function Homepage() {
  const user = useRecoilValue(UserInfoState);
  const bookMarksInfo = useRecoilValue(BookMarksState);
  return (
    <ContentWrap>
      <ScrollToTop />
      <Mobiletop pagename="홈 화면" />
      <HomeSlider type="curation" />
      <h1>요즘 뜨는 매장</h1>
      <Container>
        <HomeSlider type="trend" />
      </Container>
      <h1>오늘의 제로웨이스트 상품</h1>
      <Items type="today" />
      {user.islogin && !bookMarksInfo.empty && (
        <>
          <h1>내가 북마크한 매장</h1>
          <Container>
            <HomeSlider type="bookmark" />
          </Container>
        </>
      )}
      <h1>가까운 곳에 위치한 매장이에요</h1>
      <Nearest />
      <h1>나만의 제품을 만나 보세요</h1>
      <Items type="my" />
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding-bottom: 20.8rem;
  @media (max-width: 768px) {
    padding-bottom: 52rem;
  }
  > h1 {
    font-size: 2rem;
    width: 80%;
    margin: 9.6rem 0 2.4rem 0;

    @media (max-width: 768px) {
      font-size: 4rem;
      width: 90%;
      margin: 18rem 0 4rem 0;
    }
  }
`;

const Container = styled.div`
  height: 69rem;
  width: 80%;
  border-bottom: 0.5px solid var(--light-gray, #f2f2f2);
  @media (max-width: 768px) {
    width: 100%;
    height: 125.5rem;
  }
`;

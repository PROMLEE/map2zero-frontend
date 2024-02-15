import styled from 'styled-components';
import { Mobiletop } from '../components';
import { AdSlider, Items, StoreInfo } from '../components/Home';
import { ItemDummy } from '../components/Home/Dummy/ItemDummy';
import { StoreInfoDummy } from '../components/Home/Dummy/StoreDummy';
import isLogin from '../utils/isLogin';
import { useRecoilValue } from 'recoil';
import { Session } from '../recoil/session';
export default function Homepage() {
  useRecoilValue(Session);
  return (
    <ContentWrap>
      <Mobiletop pagename="홈 화면" />
      <AdSlider />
      <h1>요즘 뜨는 매장</h1>
      <StoreInfo info={StoreInfoDummy} />
      <h1>오늘의 제로웨이스트 상품</h1>
      <Items info={ItemDummy} />
      {isLogin() && (
        <>
          {' '}
          <h1>내가 북마크한 매장</h1>
          <StoreInfo info={StoreInfoDummy} />
        </>
      )}

      <h1>가까운 곳에 위치한 매장이에요</h1>
      <StoreInfo info={StoreInfoDummy} />
      <h1>나만의 제품을 만나 보세요</h1>
      <Items info={ItemDummy} />
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
    margin: 5.6rem 0 2.4rem 0;

    @media (max-width: 768px) {
      font-size: 4rem;
      width: 90%;
      margin: 16rem 0 4rem 0;
    }
  }
`;

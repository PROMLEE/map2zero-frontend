import styled from 'styled-components';
import SearchResultList from '../components/SearchFile/SearchResultList';
import NoSearchFile from '../components/SearchFile/NoSearchFile'

export default function Search() {
  return (
    <ContentWrap>
      {/* <SearchResultList/> */}
      <NoSearchFile/>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  
`;
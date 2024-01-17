import { css } from 'styled-components';
import NotoSansRegular from './NotoSansKR-Regular.ttf';
import NotoSansMedium from './NotoSansKR-Medium.ttf';
import NotoSansBold from './NotoSansKR-Bold.ttf';

export const fonts = css`
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src:
      local('NotoSansKR'),
      url(${NotoSansRegular}) format('truetype');
  }
`;

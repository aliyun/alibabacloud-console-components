import styled from 'styled-components';
import Partial from './Partial';
import { flexContainer, flexItem } from './utils';

const Content = styled(Partial as any)`
  ${flexContainer()};
  flex-grow: 1;
  margin-bottom: 0;
`;

export interface ISideProps {
  minWidth?: number;
}

export const Side = styled.div<ISideProps>`
  ${flexItem({ flexShrink: 0 })};
  position: relative;
  ${({ minWidth = 180 }) => `min-width: ${minWidth}px;`}
  padding-right: 24px;
`;

export const Main = styled.div`
  ${flexItem({ flexGrow: 1 })};
  padding-bottom: 40px;
  width: 100%;
  /* https://stackoverflow.com/a/43809765 */
  /* 让内容宽度恰好等于去掉Side以后的剩余宽度 */
  min-width: 0;
  /* 允许一些box-shadow溢出 */
  overflow: visible;
`;

export default Content;

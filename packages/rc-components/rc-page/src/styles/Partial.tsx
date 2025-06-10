import styled from 'styled-components';
import { flexItem, lineHeight } from './utils';

const fontSize = 12;
const padding = 24;

export type PartialProps = {};

const Partial = styled.div<PartialProps>`
  ${flexItem()}
  box-sizing: border-box;
  width: 100%;
  font-size: ${fontSize}px;
  line-height: ${lineHeight(fontSize)}px;
  margin-bottom: 16px;
  padding: 0 ${padding}px;

  &:first-child {
    margin-top: 24px;
  }
`;

export default Partial;

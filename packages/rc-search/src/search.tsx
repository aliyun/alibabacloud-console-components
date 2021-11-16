import React from "react";
import { IRcSearchProps } from "./types/IRcSearchProps.type";
import ModeSingleSingle from "./modeSingleSingle";
import ModeSingleMulti from "./modeSingleMulti";
import classNames from 'classnames'
import styled from "styled-components";
import {baseClassName} from './constants'
import './index.less';


const SearchWrap = styled.div`
  height: 32px;
  width: 400px;
`;

export const Search: React.FC<IRcSearchProps> = (props) => {
  const { className, mode } = props
  return (
    <SearchWrap className={classNames(baseClassName, className)}>
      {mode === 'single-single' && <ModeSingleSingle {...props} />}
      {mode === 'single-multi' &&  <ModeSingleMulti {...props} />}
      {mode === 'multi-multi' && <ModeSingleMulti {...props} />}
    </SearchWrap>
  );
};



import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { baseClassName } from './constants';
import ComplexSearch from './ComplexSearch/index';
import { IRcSearchProps } from './types/IRcSearchProps.type';

import './index.less';
import { useWindTheme } from './useCssVar';

const SearchWrap = styled.div`
  height: 32px;
  width: 400px;
  display: inline-block;
  vertical-align: top;
`;

export const Search: React.FC<IRcSearchProps> = (props) => {
  const { className, simple = false, style } = props;
  const windThemeClass = useWindTheme();
  return (
    <React.Fragment>
      <SearchWrap className={classNames(baseClassName, className, windThemeClass)} style={style}>
        <ComplexSearch {...props} />
      </SearchWrap>
    </React.Fragment>
  );
};


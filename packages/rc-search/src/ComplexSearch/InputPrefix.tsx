import React from 'react';
import classNames from 'classnames';
import { Icon, Select } from '@alicloud/console-components';

const SearchConditionSelectPrefix = (props: any) => {
  const { dataSource = [], label, ...reset } = props;

  return (
    <div className={classNames('condition-item')}>
      <span className={classNames('condition-item-txt')}>{label}</span>
      <Icon type="caret-down" size="xxs" />
      <Select
        className={classNames('condition-select')}
        hasBorder={false}
        dataSource={dataSource}
        itemRender={({label, value}) =>(<span data-value={value}>{label}</span>)}
        autoWidth={true}
        {...reset}
      />
    </div>
  )
}

export default SearchConditionSelectPrefix;

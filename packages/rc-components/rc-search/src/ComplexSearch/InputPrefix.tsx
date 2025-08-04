import React from 'react';
import classNames from 'classnames';
import { Icon, Select, CascaderSelect } from '@alicloud/console-components';

const SearchConditionSelectPrefix = (props: any) => {
  const { defaultValue, dataSource = [], label, type, ...reset } = props;
  const noSelect = dataSource.length < 2 && dataSource[0]?.children?.length < 2;

  return (
    <div className={classNames('condition-item')}>
      <span className={classNames('condition-item-txt')}>{label}</span>
      { noSelect ? null : <Icon type="caret-down" size="xxs" /> }
      {
        type === 'select' ? <Select
          className={classNames('condition-select', { 'rc-search-prefix-no-select': noSelect })}
          defaultValue={defaultValue}
          hasBorder={false}
          disabled={noSelect}
          autoHighlightFirstItem={false}
          dataSource={dataSource}
          itemRender={({ label, value }) => (<span data-value={value}>{label}</span>)}
          {...reset}
          autoWidth={false}
          popupClassName="rc-search-prefix"
        /> : <CascaderSelect
          className={classNames('condition-select', { 'rc-search-prefix-no-select': noSelect })}
          defaultValue={defaultValue}
          hasBorder={false}
          disabled={noSelect}
          autoHighlightFirstItem={false}
          dataSource={dataSource}
          // itemRender={({ label, value }) => (<span data-value={value}>{label}</span>)}
          {...reset}
          autoWidth={false}
          popupClassName="rc-search-prefix"
          canOnlyCheckLeaf
        />
      }
    </div>
  );
};

export default SearchConditionSelectPrefix;

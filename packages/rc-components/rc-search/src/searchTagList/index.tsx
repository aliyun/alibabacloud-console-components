import React from 'react';
import classNames from 'classnames';
import { ConfigProvider, Tag } from '@alicloud/console-components';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

import { IRcSearchTagListProps } from '../types/IRcSearchTagListProps.type';
import { IRcSearchTagItemProps } from '../types/IRcSearchTagItemProps.type';
import { TagListWrap } from '../style';
import { baseTagListClassName } from '../constants';
import PureTag from './PureTag';
import { useWindTheme } from '../useCssVar';
import message from '../message';

const { Closeable: ClosableTag } = Tag;

/**
 * 判断是否是 标签 的数据结构
 */
const isTagLikeDataStructure = (value: any) => {
  const isTag = !!value?.tagKey;
  if (isArray(value)) {
    return value[0] && !!value[0].tagKey;
  }
  return isTag;
};

const SearchTagList: React.FC<IRcSearchTagListProps> = (props) => {
  const {
    dataSource,
    className,
    style,
    onChange,
    onClear,
    // @ts-ignore
    prefix = 'next-',
  } = props;


  const onRemoveFilter = (item: IRcSearchTagItemProps) => {
    const newTagList = [...dataSource];
    if (onChange) {
      const resFindIndex = newTagList.findIndex((x:IRcSearchTagItemProps) => x.dataIndex === item.dataIndex);
      const deletedTags = newTagList.splice(resFindIndex, 1);
      onChange(deletedTags[0], newTagList);
    }
  };

  const onRemoveAllFilter = () => {
    if (onClear) {
      onClear();
    }
  };

  const onRemoveTag = (item: IRcSearchTagItemProps, tag: any) => {
    const newDataSource = [...dataSource];
    if (onChange) {
      const resFindIndex = item.value.findIndex(
        (x: any) => x.tagKey === tag.tagKey && x.tagValue === tag.tagValue,
      );
      const deletedTags = item.value.splice(resFindIndex, 1);
      if (item.value.length === 0) {
        onRemoveFilter(item);
      } else {
        onChange({
          ...item,
          value: deletedTags,
        }, newDataSource);
      }
    }
  };

  const renderTags = (tagItem: IRcSearchTagItemProps) => {
    const { value } = tagItem;

    if (isArray(value)) {
      return value.map((t) => {
        return (
          <PureTag
            showLabel
            key={`${t?.tagKey}-${t?.tagValue}`}
            tagKey={t?.tagKey}
            tagValue={t?.tagValue}
            closable
            onClose={() => { onRemoveTag(tagItem, t); return true; }}
          />);
      });
    }

    return (
      <PureTag
        showLabel
        tagKey={value?.tagKey}
        tagValue={value?.tagValue}
        closable
        onClose={() => { onRemoveFilter(tagItem); return true; }}
      />
    );
  };
  const processDataSource = dataSource?.filter(
    t => {
      if (isArray(t?.value)) {
        // 过滤掉非法的 Tag 节点
        const validValue = t.value.filter(isTagLikeDataStructure);

        if (!validValue.length) return false;
      }

      if (isObject(t?.value) as unknown as { tagKey?: string }) {
        return isTagLikeDataStructure(t.value);
      }

      return true;
    }
  ) || [];
  const isWindClass = useWindTheme();
  return (
    <TagListWrap prefix={prefix} className={classNames(baseTagListClassName, className, isWindClass)} style={style}>
      {
        processDataSource.map((tagItem:IRcSearchTagItemProps) => {
          if (isTagLikeDataStructure(tagItem.value)) {
            return renderTags(tagItem);
          }
          return (
            <ClosableTag
              className="search-tags-tag"
              key={tagItem.dataIndex + tagItem.value}
              type="normal"
              size="medium"
              onClose={() => { onRemoveFilter(tagItem); return true; }}
            >
              <><label className="search-tags-tag-label">{tagItem.label}</label>{tagItem.valueLabel || tagItem.value}</>
            </ClosableTag>
          );
        })
      }
      {processDataSource.length > 0 && (<a className="remove-btn" onClick={onRemoveAllFilter}>{message.clearFilter}</a>)}

    </TagListWrap>
  );
};

export default ConfigProvider.config(SearchTagList) as typeof SearchTagList;

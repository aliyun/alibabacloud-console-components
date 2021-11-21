import React, {useState} from "react";
import classNames from 'classnames'
import styled from "styled-components";
import { Tag } from '@alicloud/console-components'
import { IRcSearchTagListProps } from '../types/IRcSearchTagListProps.type'
import { IRcSearchTagItemProps } from '../types/IRcSearchTagItemProps.type'
import { TagListWrap } from '../style'
import {baseTagListClassName} from '../constants'
const { Group: TagGroup, Closeable: ClosableTag } = Tag;

const SearchTagList: React.FC<IRcSearchTagListProps> = (props) => {
  const {
    tagList,
    className, 
    style,
    onChange
  } = props;


  function onRemoveTag (item: IRcSearchTagItemProps) {
    let newTagList = [...tagList];
    if (onChange) {
      let resFindIndex = newTagList.findIndex((x:IRcSearchTagItemProps) => x.dataIndex === item.dataIndex)
      newTagList.splice(resFindIndex, 1);
      onChange(newTagList);
    }
  }

  function onRemoveAllTag(){
    if (onChange) {
      onChange([])
    }
  }

  return (
    <TagListWrap className={classNames(baseTagListClassName, className)} style={style}>
      <TagGroup>
      {tagList && tagList.length > 0 && tagList.map((tagItem:IRcSearchTagItemProps) => {
        return (
          <ClosableTag key={tagItem.dataIndex + tagItem.value} type="normal" size="medium" onClose={() => {onRemoveTag(tagItem); return true;}}>
            {tagItem.label}:{tagItem.valueShow}
          </ClosableTag>
        )
      })
      }
      {tagList && tagList.length > 0 && (<a className="remove-btn" onClick={onRemoveAllTag}>清除筛选条件</a>)}
      </TagGroup>
      
    </TagListWrap>
  )
}

export default SearchTagList;
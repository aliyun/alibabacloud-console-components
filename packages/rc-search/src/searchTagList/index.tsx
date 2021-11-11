import React, {useState} from "react";
import classNames from 'classnames'
import styled from "styled-components";
import { Tag } from '@alicloud/console-components'
import { IRcSearchProps } from "../types/IRcSearchProps.type";
const { Group: TagGroup, Closeable: ClosableTag } = Tag;
const WrapDiv = styled.div`
  
`

const SearchTagList: React.FC<any> = (props) => {
  const {
    tagList,
    onChange
  } = props;

  function onRemoveTag (item: any) {
    if (onChange) {
      onChange('remove', [item])
    }
    
  }

  return (
    <WrapDiv>
      <TagGroup>
      {tagList && tagList.length > 0 && tagList.map((tagItem:any) => {
        return (
          <ClosableTag key={tagItem.dataIndex + tagItem.value} type="normal" size="medium" onClose={() => {onRemoveTag(tagItem); return true;}}>
            {tagItem.label}:{tagItem.valueShow}
          </ClosableTag>
        )
      })
      }
      </TagGroup>

    </WrapDiv>
  )
}

export default SearchTagList;
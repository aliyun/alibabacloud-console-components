/**
 * @title 可关闭
 * @description 通过点击标签或者 closeIcon 来隐藏标签
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag } from '@alicloudfe/components'

const { Group: TagGroup, Closeable: CloseableTag } = Tag

class Demo extends React.Component {
  renderCloseAreaTags() {
    return ['tag', 'tail'].reduce(
      (prev, curr) =>
        prev.concat([
          <h4 key={`tag-title-${curr}`}>点击{curr} 关闭</h4>,
          <CloseableTag key={`tag-${curr}-1`} closeArea={curr}>
            closeArea: {curr}
          </CloseableTag>,
          <CloseableTag key={`tag-${curr}-2`} type="primary" closeArea={curr}>
            closeArea: {curr}
          </CloseableTag>
        ]),
      []
    )
  }
  render() {
    return (
      <div className="tag-list">
        <TagGroup>{this.renderCloseAreaTags()}</TagGroup>
        <h4>close handler</h4>
        <TagGroup>
          <CloseableTag
            onClose={() => {
              console.log('可关闭')
            }}
          >
            close
          </CloseableTag>
          <CloseableTag
            onClose={(from) => {
              console.log('禁用关闭')
              return false
            }}
          >
            {' '}
            prevent close{' '}
          </CloseableTag>
          <CloseableTag afterClose={() => console.log('关闭后回调')}>
            after Close
          </CloseableTag>
        </TagGroup>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``

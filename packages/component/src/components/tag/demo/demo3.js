import React, { Component } from 'react'
import { Tag } from '@alicloud/console-components'

const {Group: TagGroup, Closable: ClosableTag} = Tag

const handler = from => {
  console.log(`close from ${from}`)
  return false
}

export default class Demo3 extends React.Component {
  renderTagList (option) {
    return [
      <ClosableTag key={'tag-1'} type={option.type}>{option.type}</ClosableTag>,
      <ClosableTag key={'tag-2'} type={option.type} disabled>{option.type} {' disabled '}</ClosableTag>
    ]
  }

  renderCloseAreaTags () {
    return ['tag', 'tail'].reduce((prev, curr) => prev.concat([
      <ClosableTag key={`tag-${curr}-1`} closeArea={curr}>closeArea {curr}</ClosableTag>,
      <ClosableTag key={`tag-${curr}-2`} type="primary" closeArea={curr}>closeArea {curr}</ClosableTag>,
    ]), [])
  }
  render() {
    return (
      <div className="tag-list">
        <h4>type: 'normal'</h4>
        <TagGroup>{this.renderTagList({type: 'normal'})}</TagGroup>
        <h4>type: 'primary'</h4>
        <TagGroup>{this.renderTagList({type: 'primary'})}</TagGroup>
        <h4>closeArea: ['tag', 'tail']</h4>
        <TagGroup>
          {this.renderCloseAreaTags()}
        </TagGroup>
        <h4>close handler</h4>
        <TagGroup>
          <ClosableTag onClose={() => true}> onClose allow close</ClosableTag>
          <ClosableTag onClose={() => false}> onClose prevent close</ClosableTag>
          <ClosableTag onClose={handler}> onClose from </ClosableTag>
          <ClosableTag afterClose={() => console.log('after close')}>after Close</ClosableTag>
        </TagGroup>
        <h4>closable link tag</h4>
        <TagGroup>
          <ClosableTag type="primary" ><a href="//www.alibaba.com" target="_blank">Primary Link Tag</a></ClosableTag>
          <ClosableTag type="normal"><a href="//www.alibaba.com" target="_blank">normal Link Tag</a></ClosableTag>
        </TagGroup>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Tag } from '@alicloud/console-components'

const {Group: TagGroup, Selectable: SelectableTag} = Tag
const dataSource = ['selectable tag', 'I like orange', 'small tag', 'disabled', 'disabled & checked']

export default class Demo2 extends React.Component {
  state = {
        value: ['I like orange', 'disabled & checked']
  }

  handleChange(name, checked) {
    const {value} = this.state
    const next = checked ? [...value, name] : value.filter(n => n !== name)

    this.setState({value: next})
  }

  renderTagList(props) {
    const {value} = this.state;

    return dataSource.map((name, i) => (
      <SelectableTag key={name}
        checked={value.indexOf(name) > -1}
        disabled={i > 2}
        size={i === 2 ? 'small' : undefined}
        onChange={this.handleChange.bind(this, name)}
        {...props}>{name}</SelectableTag>
    ))
  }

  render() {
    return (
      <div className="tag-list">
        <h4>type: 'default'</h4>
        <TagGroup>{this.renderTagList({type: 'normal'})}</TagGroup>
        <h4>type: 'primary'</h4>
        <TagGroup>{this.renderTagList({type: 'primary'})}</TagGroup>
      </div>
    )
  }
}


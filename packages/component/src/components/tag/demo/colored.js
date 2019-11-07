import React from 'react'
import { Tag, Icon } from '@alicloud/console-components'

const { Group: TagGroup, Colored: ColoredTag, ColoredGroup } = Tag

const Demo1 = () => (
	<div className="tag-list">
    <h4>Use single Tag</h4>
    <div>
      <ColoredTag type="light-steel-blue">Light Steel Blue</ColoredTag>
      <ColoredTag type="plum">Plum</ColoredTag>
      <ColoredTag type="misty-rose">Misty Rose</ColoredTag>
      <ColoredTag type="light-goldenrod-yellow">Light Goldenrod Yellow</ColoredTag>
      <ColoredTag type="pale-green">Pale Green</ColoredTag>
      <ColoredTag type="silver">Silver</ColoredTag>
      <ColoredTag type="gray">Gray</ColoredTag>
    </div>
    <h4>Use normal group</h4>
    <TagGroup>
      <ColoredTag type="light-steel-blue">Light Steel Blue</ColoredTag>
      <ColoredTag type="plum">Plum</ColoredTag>
      <ColoredTag type="misty-rose">Misty Rose</ColoredTag>
      <ColoredTag type="light-goldenrod-yellow">Light Goldenrod Yellow</ColoredTag>
      <ColoredTag type="pale-green">Pale Green</ColoredTag>
    </TagGroup>
    <h4>Use colored group</h4>
    <ColoredGroup>
      <Tag>Light Steel Blue</Tag>
      <Tag>Plum</Tag>
      <Tag>Misty Rose</Tag>
      <Tag>Light Goldenrod Yellow</Tag>
      <Tag>Pale Green</Tag>
      <ColoredTag>Light Steel Blue</ColoredTag>
      <ColoredTag>Plum</ColoredTag>
      <ColoredTag>Misty Rose</ColoredTag>
    </ColoredGroup>
  </div>
 )

export default Demo1


import React from 'react'
import styled from 'styled-components'
import { Tag } from '@alicloud/console-components'
import { useSearchPagesUpdater } from '../SearchPages'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .next-tag {
    margin-right: 8px;
  }
`

const ScTagLabel = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: #8c8c8c;
`

const DocTags: React.FC<{ tags?: { [name: string]: any } }> = ({ tags }) => {
  const updater = useSearchPagesUpdater()
  if (!tags) return null
  return (
    <Container>
      <ScTagLabel>文档Tags：</ScTagLabel>
      {Object.keys(tags)
        // 有些tag只用于编排站点，将_开头的tag隐藏
        .filter(name => !name.startsWith('_'))
        .map(name => {
          const val = tags[name]
          if (val === true || val === 'true') {
            return (
              <Tag
                type="normal"
                key={name}
                onClick={
                  ((e: React.MouseEvent) => {
                    // https://stackoverflow.com/a/44587299/8175856
                    // 避免造成弹层消失
                    e.nativeEvent.stopImmediatePropagation()
                    e.stopPropagation()
                    e.preventDefault()
                    updater(name)
                  }) as any
                }
              >
                {name}
              </Tag>
            )
          } else {
            return (
              <Tag
                type="normal"
                key={name}
                onClick={
                  ((e: React.MouseEvent) => {
                    // https://stackoverflow.com/a/44587299/8175856
                    // 避免造成弹层消失
                    e.nativeEvent.stopImmediatePropagation()
                    e.stopPropagation()
                    e.preventDefault()
                    updater(`${name}:${val}`)
                  }) as any
                }
              >
                {name}:{val}
              </Tag>
            )
          }
        })}
    </Container>
  )
}

export default DocTags

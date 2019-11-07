import React from 'react'
import {
  SList,
  SItem,
  SMain,
  STitle,
  SDescription,
  STagsArea,
  STag,
  SSelection,
  SIcon,
} from './styles'
import { GetFusionConfig, IFusionConfigProps } from './utils'

export interface IDataItem {
  /**
   * 列表项标题
   */
  title?: React.ReactNode
  /**
   * 列表项内容
   */
  description?: React.ReactNode
  /**
   * 列表项是否被选中
   */
  selected?: boolean
  /**
   * 列表项标签
   */
  tags?: string[]
}

export interface IListProps {
  /**
   * 列表数据
   */
  data: IDataItem[]
  style?: React.CSSProperties
  className?: string
  /**
   * 列表顶部的额外内容
   */
  extraTop?: React.ReactNode
  /**
   * 列表项点击回调
   */
  onItemClick?: (clickedIndex: number) => void
}

const ListItem: React.FC<
  IDataItem & {
    onItemClick?: () => void
    hasBorderTop: boolean
    prefix: string
  }
> = ({
  title,
  description,
  selected,
  tags,
  onItemClick,
  hasBorderTop,
  prefix,
}) => {
  return (
    <SItem
      selected={!!selected}
      onClick={onItemClick}
      hasBorderTop={hasBorderTop}
    >
      <SMain>
        <STitle>{title}</STitle>
        <SDescription>{description}</SDescription>
        {Array.isArray(tags) && (
          <STagsArea>
            {tags.map((tag, i) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <STag key={i} size="small" prefix={prefix}>
                  {tag}
                </STag>
              )
            })}
          </STagsArea>
        )}
      </SMain>
      <SSelection>{selected && <SIcon type="check" size="xs" />}</SSelection>
    </SItem>
  )
}

const List: React.FC<IListProps & IFusionConfigProps> = ({
  data,
  style,
  className,
  fusionConfig,
  extraTop,
  onItemClick,
}) => {
  const { prefix = 'next-' } = fusionConfig
  // const hasItems = Array.isArray(data) && data.length > 0
  const content = (() => {
    return data.map((item, i) => {
      return (
        <ListItem
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          onItemClick={() => {
            typeof onItemClick === 'function' && onItemClick(i)
          }}
          // 如果有extraTop的话，第一个ListItem也需要有BorderTop
          hasBorderTop={!!extraTop || i > 0}
          {...item}
          prefix={prefix}
        />
      )
    })
  })()
  return (
    <SList style={style} className={className} prefix={prefix}>
      {extraTop}
      {content}
    </SList>
  )
}

export default GetFusionConfig(List)

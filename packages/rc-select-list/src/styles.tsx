import React from 'react'
import styled from 'styled-components'
import { Card, Tag, Icon, Select } from '@alicloud/console-components'
import { CardProps } from '@alicloud/console-components/types/card'
import { TagProps } from '@alicloud/console-components/types/tag'
import { SelectProps } from '@alicloud/console-components/types/select'

const { Colored: ColoredTag } = Tag as any

const WrappedTag: React.FC<TagProps & { prefix: string }> = props => (
  <ColoredTag type="silver" {...props} />
)
const WrappedCard: React.FC<CardProps & { prefix: string }> = props => (
  <Card contentHeight="auto" {...props} />
)
const WrappedSelect: React.FC<SelectProps & { prefix: string }> = props => (
  <Select {...props} />
)

export const SItem = styled.div<{ selected: boolean; hasBorderTop: boolean }>`
  & {
    ${({ selected }) => {
      if (selected) return 'background-color: #f3faff;'
      return ''
    }}
    ${({ hasBorderTop }) => {
      if (hasBorderTop) return 'border-top: 1px solid #e5e5e5;'
      return ''
    }}
  }
  transition: background-color 0.3s;
`
export const SExtraItem = styled.div``
export const SMain = styled.div``
export const STitle = styled.div``
export const SDescription = styled.div``
export const STagsArea = styled.div``
export const STag = styled(WrappedTag)`
  && {
    cursor: default;
  }
`
export const SSelection = styled.div``
export const SIcon = styled(Icon)``
export const SList = styled(WrappedCard)`
  && {
    border: 1px solid #ebebeb;
  }

  ${({ prefix }) => `.${prefix}card-body`} {
    padding: 0;
    margin: 0;
    ${({ prefix }) => `.${prefix}card-content`} {
      margin: 0;
    }
  }
  ${SItem} {
    &:hover {
      background-color: #ebebeb;
    }
    padding: 8px 16px;
    display: flex;
    align-items: center;
    ${SMain} {
      flex: 1 1 auto;
      ${STitle} {
        font-size: 12px;
        line-height: 20px;
        color: #333333;
      }
      ${SDescription} {
        font-size: 12px;
        line-height: 20px;
        color: #888888;
      }
      ${STagsArea} {
        margin-top: 8px;
        ${STag} {
          display: inline-block;
          &:not(:first-child) {
            margin-left: 8px;
          }
        }
      }
    }
    ${SSelection} {
      flex: 0 0 auto;
      margin-left: 24px;
      width: 12px;
      height: 12px;
      ${SIcon} {
        color: #0070cc;
        position: relative;
        bottom: 2px;
      }
    }
  }
`

export const SSelect = styled(WrappedSelect)`
  &:hover {
    cursor: pointer;
  }
  &&& {
    ${({ prefix }) => `.${prefix}select-values .${prefix}icon`} {
      ::before {
        font-size: 8px;
      }
    }
    ${({ prefix }) => `.${prefix}select-values .${prefix}tag-close-btn`} {
      margin-left: 8px;
    }
  }
`

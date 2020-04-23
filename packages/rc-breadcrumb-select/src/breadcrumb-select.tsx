import React from 'react'
import cs from 'classnames'
import { DropdownProps } from '@alicloud/console-components/types/dropdown'
import * as S from './style'

/**
 * @public
 */
export interface IBreadcrumbSelectProps {
  /**
   * 设置渲染下拉列表的数据源，数据格式为`[{ value: string, label: React.ReactNode, link: string, to: string }]`
   */
  dataSource?: {
    label: React.ReactNode
    value: string
  }[]
  /**
   * 当前选中的下拉框的值
   */
  value?: string
  /**
   * 下拉选择之后的回调函数，一般在该函数里面改变当前props中value的值
   */
  onSelect?: (
    value: string,
    item: {
      label: React.ReactNode
      value: string
    }
  ) => void
  /**
   * 设置BreadcrumbSelect最外层的className
   */
  className?: string
  /**
   * 设置弹层的props, 继承自基础组件 {@link https://aliyun.github.io/alibabacloud-console-components/base-components/dropdown/ | Dropdown} 的props
   */
  dropdownProps?: DropdownProps
}

/**
 * @public
 */
const BreadcrumbSelect: React.FC<IBreadcrumbSelectProps> = ({
  className,
  dropdownProps = {},
  ...restProps
}) => {
  return (
    <>
      <S.GlobalStyle prefix="next-" />
      <S.SMenuSelect
        className={cs('wind-breadcrumb-select', className)}
        {...restProps}
        dropdownProps={{
          style: { minWidth: '100px', maxWidth: '200px' },
          ...dropdownProps,
        }}
      />
    </>
  )
}

export default BreadcrumbSelect

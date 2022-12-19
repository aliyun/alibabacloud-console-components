import { Search as NextSearch } from '@alifd/next'
import React, { useCallback, useMemo, useState } from 'react'
import classnames from 'classnames'
import HOC, { useDefaultOffsetY } from '../utils/popupHoc'
// import { withThemeClass } from '../utils/withThemeClass'

type SearchProps = React.ComponentProps<typeof NextSearch>

const Search: React.FC<SearchProps> = React.forwardRef((props, ref) => {
  const [focus, setFocus] = useState(false)
  const [visible, setVisible] = useState(false)
  const onFocus = useCallback(
    e => {
      setFocus(true)
      if (typeof props.onFocus === 'function') {
        props.onFocus(e)
      }
    },
    [props.onFocus]
  )
  const onBlur = useCallback(
    e => {
      setFocus(false)
      if (typeof props.onBlur === 'function') {
        props.onBlur(e)
      }
    },
    [props.onBlur]
  )
  const onVisibleChange = useCallback(
    (v, ...rest) => {
      setVisible(v)
      if (typeof props.onVisibleChange === 'function') {
        // @ts-ignore
        props.onVisibleChange(v, ...rest)
      }
    },
    [props.onVisibleChange]
  )

  // Search filter也是个选择器，要设置它的弹层offset
  const defaultOffsetY = useDefaultOffsetY()
  const filterProps = useMemo(() => {
    const popupProps = {
      align: 'tl bl',
      offset: [0, defaultOffsetY],
      ...props.filterProps?.popupProps
    }
    const filterProps = {
      ...props.filterProps,
      popupProps
    }
    return filterProps
  }, [defaultOffsetY, props.filterProps])

  return (
    <NextSearch
      {...props}
      ref={ref as any}
      onFocus={onFocus}
      onBlur={onBlur}
      onVisibleChange={onVisibleChange}
      className={classnames(
        props.className,
        // 根据当前状态增加类名，用来做样式覆盖
        props.searchText ? 'custom-search-text' : null,
        focus ? 'focusing' : false,
        visible ? 'visible' : false,
        props.disabled ? 'disabled' : false,
        props.searchText ? null : 'next-search-no-custom-search-text'
      )}
      filterProps={filterProps}
    />
  )
})

export default HOC(Search)

import * as React from 'react'
import { Slider } from '@alicloud/console-components'
import styled from 'styled-components'
import { SliderProps } from '@alicloud/console-components/types/slider'
import colorMap from '../config/colorMap'
import SDots from './SDots'

const calculatedWidth = (total: number, closeable: boolean): string => {
  const baseWidth = 16
  let width = baseWidth
  if (closeable) {
    width += 24
  }
  if (total > 1) {
    width += 16
    width += total * 32
  }
  return `calc(100% - ${width}px)`
}

const SliderFC: React.FC<SliderProps & {
  total: number
  closeable: boolean
  type: string
  dotsRender: () => React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ total, closeable, type, ...restProps }) => <Slider {...restProps} />

const SSlider = styled(SliderFC)`
  /* 轮播图部分 */
  width: ${({ total, closeable }) => calculatedWidth(total, closeable)};
  && {
    position: static;
  }

  .${getPrefix}slick-dots.hoz {
    /* 设置normal样式 */
    width: auto;
    right: ${({ closeable }) => (closeable ? '40px' : '16px')};
    left: auto;
    top: 50%;
    height: 8px;
    line-height: 8px;
    transform: translateY(-50%);
    bottom: 0;
    /* 设置dot之间的距离 */
    .${getPrefix}slick-dots-item {
      margin-right: 0;
      margin-left: 4px;
    }
  }
  .dots-cust {
    /* 当前active时候的样式 */
    .active ${SDots} {
      background: ${({ type }) => colorMap[type || 'success']};
    }
  }
`

function getPrefix({ prefix }: { prefix: string }): string {
  return prefix
}

export default SSlider

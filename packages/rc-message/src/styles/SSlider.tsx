import * as React from 'react'
import { Slider } from '@alicloud/console-components'
import styled from 'styled-components'
import colorMap from '../config/colorMap'
import SDots from './SDots'
import { IOnchange } from '../RcMessage'

const calculatedWidth = (total = 0, closeable = 0) => {
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

export interface ISliderProps {
  /**
   * @total dataSource的长度
   */
  total?: number
  /**
   * @closeable 是否可关闭 1 ｜ 0
   */
  closeable?: number
  /**
   * @prefix 样式前缀
   */
  prefix?: string
  /**
   * @type 类型 info | notice | success | warning | error
   */
  type?: string
  /**
   * @dotsClass dots的className
   */
  dotsClass?: string
  /**
   * @dotsDirection dots的方向，固定为ver
   */
  dotsDirection?: 'ver' | 'hoz'
  /**
   * @arrows 是否展示左右箭头
   */
  arrows?: boolean
  dotsRender?: any
}

const SliderFC: React.FC<ISliderProps> = props => <Slider {...props} />

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

function getPrefix({ prefix }: { prefix: string }) {
  return prefix
}

export default SSlider

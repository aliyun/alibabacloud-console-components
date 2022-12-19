import { IDataSourceItem } from './IDataSourceItem.type'
import { ISliderOptions } from './ISliderOptions.type'

/**
 * Message的属性
 * @public
 */
export interface IRcAnnouncementProps {
  /**
   * 内容, 数组类型，最多支持三条内容，多余的会被移除, 详情见下dataSource
   */
  dataSource: Array<IDataSourceItem>
  /**
   * 是否可关闭
   * @defaultValue `false`
   */
  closeable?: boolean
  /**
   * 类型
   * @defaultValue `success`
   */
  type?: 'success' | 'error' | 'notice' | 'warning' | 'info'
  /**
   * 自定义类名
   */
  className?: string
  /**
   * 自定义样式
   */
  style?: React.CSSProperties
  /**
   * 轮播属性，继承Slider的部分属性，详情见下sliderOptions
   */
  sliderOptions?: ISliderOptions
}

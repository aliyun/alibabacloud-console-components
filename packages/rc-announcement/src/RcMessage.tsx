import * as React from 'react'
import { Message } from '@alicloud/console-components'
import classnames from 'classnames'
import Title from './Title'
import iconMap from './config/iconMap'
import extractSliderOptions from './utils/ExtractSlider'
import { SDots, SSlider, SWrapper, SMessageItem } from './styles'
import { GetFusionConfig, IFusionConfigProps } from './utils/GetFusionConfig'

/**
 * 轮播属性
 * @public
 */
export interface ISliderOptions {
  /**
   * 是否自动播放
   * @defaultValue `true`
   */
  autoplay?: boolean
  /**
   * 自动播放速度
   * @defaultValue `3000`
   */
  autoplaySpeed?: number
  /**
   * 切换速度
   * @defaultValue `600`
   */
  speed?: number
  /**
   * 轮播切换的回调函数
   */
  onChange?: (index: number) => void
  /**
   * 轮播切换动画
   * @defaultValue `slide`
   */
  animation?: 'fade' | 'slide'
}

/**
 * dataSource的属性
 * @public
 */
export interface IDataSourceItem {
  /**
   * 标题
   */
  title: React.ReactNode
  /**
   * 内容
   */
  content?: React.ReactNode
  /**
   * 链接
   */
  link?: React.ReactNode
}

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

const RcMessage: React.FC<IRcAnnouncementProps & IFusionConfigProps> = ({
  dataSource = [],
  type = 'success',
  className,
  closeable = false,
  sliderOptions,
  style,
  fusionConfig,
}) => {
  const { prefix = 'next-' } = fusionConfig
  const renderMessageList = (data: IRcAnnouncementProps['dataSource']) =>
    data.map((item: IDataSourceItem, index: number) => (
      <SMessageItem
        prefix={prefix}
        className={classnames({
          'large-message': !!item.content,
          'medium-message': !item.content,
          // "no-icon-title": type === "info"
        })}
        // eslint-disable-next-line react/no-array-index-key
        key={`${item.title}-${index}`}
        title={<Title title={item.title} link={item.link} />}
        iconType={iconMap[type]}
        type={type === 'info' ? 'help' : type}
        size="medium"
        closeable={false}
      >
        {item.content}
      </SMessageItem>
    ))

  const newDataSource =
    dataSource.length > 3 ? dataSource.slice(0, 3) : dataSource
  return (
    <SWrapper
      prefix={prefix}
      size={newDataSource.some(item => item.content) ? 'large' : 'medium'}
    >
      <Message
        type={type === 'info' ? 'help' : type}
        closeable={closeable}
        className={classnames(className)}
        style={style}
      >
        <SSlider
          closeable={closeable ? 1 : 0}
          total={newDataSource.length || 0}
          type={type === 'info' ? 'help' : type}
          prefix={prefix}
          autoplay
          {...extractSliderOptions(sliderOptions || {})}
          dotsClass="dots-cust"
          dotsDirection="hoz"
          arrows={false}
          dotsRender={() => <SDots className="dots" />}
        >
          {renderMessageList(newDataSource)}
        </SSlider>
      </Message>
    </SWrapper>
  )
}

export default GetFusionConfig(RcMessage)

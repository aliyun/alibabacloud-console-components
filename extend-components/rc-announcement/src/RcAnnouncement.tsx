import * as React from 'react'
import { Message } from '@alicloud/console-components'
import classnames from 'classnames'
import Title from './Title'
import iconMap from './config/iconMap'
import {
  extractSliderOptions,
  GetFusionConfig,
  IFusionConfigProps,
} from './utils'
import { SDots, SSlider, SWrapper, SMessageItem } from './styles'
import { IRcAnnouncementProps } from './types/IRcAnnouncementProps.type'
import { IDataSourceItem } from './types/IDataSourceItem.type'

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
  const renderMessageList = (
    data: IRcAnnouncementProps['dataSource']
  ): React.ReactNode[] =>
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
      size={newDataSource.some((item) => item.content) ? 'large' : 'medium'}
    >
      <Message
        type={type === 'info' ? 'help' : type}
        closeable={closeable}
        className={classnames(className)}
        style={style}
      >
        <SSlider
          closeable={closeable}
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

/**
 * @public
 */
const defaultExp: React.FC<IRcAnnouncementProps> = GetFusionConfig(RcMessage)
export default defaultExp

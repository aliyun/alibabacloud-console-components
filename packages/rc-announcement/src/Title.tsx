import React from 'react'
import classnames from 'classnames'
import { IDataSourceItem } from './RcMessage'

const Title: React.FC<IDataSourceItem> = ({ title, link }) => (
  <span>
    <span className={classnames({ 'link-title': !!link })}>{title}</span>
    {link || ''}
  </span>
)

export default Title

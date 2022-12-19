import React from 'react'
import classnames from 'classnames'
import { IDataSourceItem } from './types/IDataSourceItem.type'

const Title: React.FC<IDataSourceItem> = ({ title, link }) => (
  <span>
    <span className={classnames({ 'link-title': !!link })}>{title}</span>
    {link || ''}
  </span>
)

export default Title

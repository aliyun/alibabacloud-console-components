import React, { 
  Fragment, 
  ReactNode, 
  ReactElement,
 } from 'react';
import Info from '@alicloud/console-components-info';
import DataFields from '@alicloud/console-components-data-fields';
import '@alicloud/console-components-info/dist/index.css';
import '@alicloud/console-components-data-fields/dist/index.css';
import './index.less';

interface IDataFieldItemProps {
  label?: ReactNode;
  dataIndex?: string;
  labelLayout?: any;
  valueLayout?: any;
  render?: (value: any) => ReactElement;
  visible?: boolean | ((value?: any, dataSource?: {}) => boolean);
  children?: ReactNode;
}

export interface IProps {
  title?: ReactNode;
  items?: Array<IDataFieldItemProps>;
  dataSource?: {
    [key: string]: any;
  };
  actions?: ReactNode;
  extra?: ReactNode;
}

const ConsoleDescription = ({
  title,
  items = [],
  dataSource = {}, 
  actions,
  extra,
}: IProps) => {
  const determinedItems: IDataFieldItemProps[] = items.filter(({
    dataIndex,
    visible = true,
  }: IDataFieldItemProps) => {
    if (typeof visible === 'function') {
      return visible(dataSource[dataIndex], dataSource)
    }
    return visible
  })

  return (
    <Info title={title} extra={actions}>
      {
        <Fragment>
          {extra && <div>{extra}</div>}
          <DataFields items={determinedItems} dataSource={dataSource} />
        </Fragment>
      }
    </Info>
  )
}

export default ConsoleDescription;
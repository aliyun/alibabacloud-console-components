import React, { ReactNode } from 'react'
import { Message } from '@alicloud/console-components'
import './index.less'

export interface IProps {
  type: 'success' | 'warning' | 'error';
  title?: ReactNode;
  description?: ReactNode;
  extra?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

const ConsoleResult = ({
  title,
  type,
  description,
  extra,
  actions,
  children,
}: IProps) => (
  <div>
    <div className="xc_rc_result">
      <Message
        title={<div className="xc_rc_result_title">{title}</div>}
        type={type}
        shape="addon"
        size="large"
      >
        { description && <div className="xc_rc_result_description">{description}</div> }
        { extra && <div className="xc_rc_result_extra">{extra}</div> }
        { actions && <div className="xc_rc_result_actions">{actions}</div> }
     </Message>
    </div>
    <div className="xc_rc_result_children">
      {children}
    </div>
  </div>
)

export default ConsoleResult
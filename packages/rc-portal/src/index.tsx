import React, { ReactNode } from 'react'
import './index.less'

export interface IProps {
  img?: string;
  title?: ReactNode;
  description?: ReactNode;
  extra?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

const ConsolePortal = ({
  img,
  title,
  description,
  actions,
  extra,
  children,
}: IProps) => (
  <div className="xc_rc_portal">
    <div className="xc_rc_portal_head">
      <div className="xc_rc_portal_img">
        <img src={img} alt="" />
      </div>
      <div className="xc_rc_portal_info">
        <span className="xc_rc_portal_title">{title}</span>
        <span className="xc_rc_portal_desc">
          {description}
        </span>
        {
          extra && (
            <span className="xc_rc_portal_extra">
              {extra}
            </span>
          )
        }
        {
          actions && (
            <span className="xc_rc_portal_actions">
              {actions}
            </span>
          )
        }
      </div>
    </div>
    {
      children && (
        <div className="xc_rc_portal_body">
          <div className="xc_rc_portal_children">
            {children}
          </div>
        </div>
      )
    }
  </div>
)

export default ConsolePortal
import React from 'react'
import { Button, Icon, Balloon } from '@alicloud/console-components'

const Tooltip = Balloon.Tooltip

/**
 * @public
 */
const SecondaryRefresh: React.FC<any> = props => {
  
  return (
    <>
      <Tooltip align="t" trigger={(
        <Button onClick={props.onClick && props.onClick}>
          <Icon type="refresh" />
        </Button>
      )}>
        {props.tooltipTxt ? props.tooltipTxt : '刷新'}
      </Tooltip>
    </>
  );
  
}

export default SecondaryRefresh

/**
 * 自定义图标的按钮
*/
import React from 'react'
import { Button, Icon, Balloon } from '@alicloud/console-components'

const Tooltip = Balloon.Tooltip

/**
 * @public
 */
const SecondaryCustom: React.FC<any> = props => {
  
  const getButton = () => {
    return (
      <Button onClick={props.onClick && props.onClick}>
        <Icon type={props.iconType} />
      </Button>
    )
  }

  return (
    <>
      {props.tooltipTxt && (
        <Tooltip align="t" trigger={(
          getButton()
        )}>
          {props.tooltipTxt}
        </Tooltip>
      )}
      {!props.tooltipTxt && (getButton())}
      
    </>
  );
  
}

export default SecondaryCustom

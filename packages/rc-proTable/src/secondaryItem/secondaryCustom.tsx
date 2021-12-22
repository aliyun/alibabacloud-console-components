/**
 * 自定义图标的按钮
*/
import React from 'react'
import { Button, Icon } from '@alicloud/console-components'

/**
 * @public
 */
const SecondaryCustom: React.FC<any> = props => {
  
  return (
    <>
      <Button onClick={props.onClick && props.onClick}>
        <Icon type={props.iconType} />
      </Button>
    </>
  );
  
}

export default SecondaryCustom

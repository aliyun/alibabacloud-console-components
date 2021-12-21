import React from 'react'
import { Button, Icon } from '@alicloud/console-components'

/**
 * @public
 */
const SecondaryRefresh: React.FC<any> = props => {
  
  return (
    <>
      <Button onClick={props.onClick && props.onClick}>
        <Icon type="refresh" />
      </Button>
    </>
  );
  
}

export default SecondaryRefresh

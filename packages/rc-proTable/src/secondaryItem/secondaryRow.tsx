/**
 * 预设功能： 自定义列
*/
import React from 'react'
import { Button, Icon } from '@alicloud/console-components'

/**
 * @public
 */
const SecondaryRow: React.FC<any> = props => {
  
  return (
    <>
      <Button>
        <Icon type="cog" />
      </Button>
    </>
  );
  
}

export default SecondaryRow

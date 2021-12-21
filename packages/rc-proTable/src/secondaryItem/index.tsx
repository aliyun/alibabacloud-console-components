import React from 'react'
import { Button, Icon } from '@alicloud/console-components'
import SecondaryCustom from './secondaryCustom'
import SecondaryRow from './secondaryRow'
import SecondaryRefresh from './SecondaryRefresh'

const defaultFilterProps = {
  autoWidth: false,
}

/**
 * @public
 */
const SecondaryItem: React.FC<any> = props => {
  
  return (
    <>
      {props.type === 'row' && (
        <SecondaryRow {...props} />
      )}
      {props.type === 'refresh' && (
        <SecondaryRefresh {...props} />
      )}
      {props.type === 'custom' && (
        <SecondaryCustom {...props} />
      )}
      {props.type === 'customComponent' && (
        props.component()
      )}
      
    </>
  );
  
}

export default SecondaryItem

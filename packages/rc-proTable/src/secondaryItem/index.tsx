import React from 'react'
import SecondaryCustom from './secondaryCustom'
import SecondaryRow from './secondaryRow'
import SecondaryRefresh from './SecondaryRefresh'
import { Balloon } from '@alicloud/console-components'

const Tooltip = Balloon.Tooltip

const defaultFilterProps = {
  autoWidth: false,
}

/**
 * @public
 */
const SecondaryItem: React.FC<any> = props => {
  let tooltipText = '';
  if (props.tooltipTxt) {
    tooltipText = tooltipText;
  } else if (props.type === 'row') {
    tooltipText = '自定义列表项';
  } else if (props.type === 'refresh') {
    tooltipText = '刷新';
  }

  let buttonComponent = () => {
    return (
      <span style={props.style}>
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
        </span>
    )
  }

  return (
    <>
      {tooltipText !== '' && (
        <Tooltip align="t" trigger={buttonComponent()}>
          {tooltipText}
        </Tooltip>
      )}
      {tooltipText === '' && (
        buttonComponent()
      )}
    </>
  );
  
}

export default SecondaryItem

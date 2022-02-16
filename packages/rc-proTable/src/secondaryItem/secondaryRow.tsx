/**
 * 预设功能： 自定义列
*/
import React, {useState} from 'react'
import { Button, Icon, Dialog, Balloon, Checkbox } from '@alicloud/console-components'
import { RowBodyWarp } from './style'

const Tooltip = Balloon.Tooltip
const { Group: CheckboxGroup } = Checkbox;

/**
 * @public
 */
const SecondaryRow: React.FC<any> = props => {
  const [visible, setVisible] = useState<boolean>(false);
  
  return (
    <>
      <Tooltip align="t" trigger={(
        <Button onClick={() => setVisible(true)}>
          <Icon type="cog" />
        </Button>
      )}>
        {props.tooltipTxt ? props.tooltipTxt : '自定义列表项'}
      </Tooltip>
      
      <Dialog
        visible={visible}
        title="自定义列表项"
        footerAlign="right"
        footerActions={['ok']}
        onOk={() => setVisible(!visible)}
        onClose={() => setVisible(!visible)}
      >
        <RowBodyWarp>
          <CheckboxGroup
            dataSource={[]}
          />
        </RowBodyWarp>
      </Dialog>
    </>
  );
  
}

export default SecondaryRow

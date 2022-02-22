import React from 'react';
import { Message, Checkbox, Icon, Dialog } from '@alicloud/console-components';
import { DialogProps } from '@alifd/next/types/dialog';
import { useState } from 'react';

export interface IChangeMessageProps {
  title?: string;
  link?: string;
  description?: string;
  children?: React.ReactChild | React.ReactChildren;
  onCheck?: (value: boolean, e: any) => void
}

const FeeHint = (props: IChangeMessageProps) => {
  const { title, link, children, description } = props;
  return (<div style={{color: '#333', lineHeight: '20px'}}>
    <Message type='warning' title={title}>
      <div style={{margin: '8px 0', lineHeight: "18px"}}>
      { description } 。
      { link ? <>详见 <a href={link}>计费文档 <Icon size={"xs"} type="external-link"/></a></>: null }
      </div>

      {children}

      <hr style={{margin: '8px 0'}}/>
      <div>
        <Checkbox label="我已知晓以上信息, 并确认开启" onChange={(...args) => props.onCheck && props.onCheck(...args)}/>
      </div>
    </Message>
  </div>);
}

export interface IChargeDialogProps extends DialogProps {
  messageProps?: IChangeMessageProps;
}

export const ChargeConfirmDialog = (props: IChargeDialogProps) => {
  const { messageProps, children } = props;
  const [disabled, setDisabled] = useState(true)
  return (
    <Dialog
      {...props}
      okProps={{...props.okProps, disabled}}
    >
      <FeeHint
        {...messageProps}
        onCheck={(value) => setDisabled(!value)}
      />
      <div style={{marginTop: 16}}>
        { children }
      </div>
    </Dialog>
  );
}

export default FeeHint;

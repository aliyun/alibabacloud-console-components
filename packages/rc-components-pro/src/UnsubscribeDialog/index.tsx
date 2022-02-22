import React from 'react';
import ReactDOM from 'react-dom';
import { Dialog, Step, Checkbox } from '@alicloud/console-components';
import { DialogProps } from '@alifd/next/types/dialog';
import message from '../message';
import '../index.less'

const LOCAL_STORAGE_ITEM = '__console-unsubscribe-hint__';

const steps = [message.step1, message.step2, message.step3, message.step4].map((item, index) => (
  <Step.Item key={index} title={item}/>
));

interface IUnsubscribeDialogProps extends DialogProps {
  visible?: boolean;
  children?: React.ReactChild;
  dialogProps?: DialogProps;
}

// @ts-ignore
const UnsubscribeDialog =  Dialog.withContext(({contextDialog, ...props}:IUnsubscribeDialogProps) => {
  const [ visible, setVisible ] = React.useState(!localStorage.getItem(LOCAL_STORAGE_ITEM));
  console.log(visible)
  const [ noPrompt, setNoPrompt ] = React.useState(false);
  // @ts-ignore
  return (
    <>
      <Dialog
        {...props}
        visible={visible}
        title={message.title}
        className='console-components-unsubscriber'
        onOk={() => {
          if (noPrompt) {
            localStorage.setItem(LOCAL_STORAGE_ITEM, 'true')
          }
          window.open('https://selfservice.console.aliyun.com/ticket/category/finance/recommend/94')
        }}
        onCancel={(e) => {
          setVisible(false)
          props.onCancel && props.onCancel(e);
        }}
        okProps={{
          children: message.action
        }}
      >
        <p className='console-components-unsubscriber-hint'>
          {message.content}
        </p>
        <div style={{marginLeft: -12, marginRight: -36}}>
          <Step current={-1} shape="circle" labelPlacement="hoz">
            {steps}
          </Step>
        </div>
        <Checkbox className='console-components-unsubscriber-ckbox' onChange={(value) => { setNoPrompt(value) }}>
          {message.noHint}
        </Checkbox>
      </Dialog>
    </>
  )
})

const openWithDialog = () => {
  return new window.Promise<void>((resolve, reject) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(
      <UnsubscribeDialog
        onCancel={async () => {
          try {
            setTimeout(async() => {
              resolve()
              ReactDOM.unmountComponentAtNode(div);
            }, 2000)
          } catch (e) {
            reject(e);
          }
        }}
      />, div);
  })
}

export const open = async () => {
  try {
    await openWithDialog();
  } catch (e) {}
}


UnsubscribeDialog.open = open;

export default UnsubscribeDialog;

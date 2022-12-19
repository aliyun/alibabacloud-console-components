/**
 * @title 自定义footer内容
 * @description 完全自定义footer内容
 */

 import React, { useState } from 'react';
 import styled from 'styled-components'
 import Drawer from '../index';
 import { Button } from '@alicloudfe/components'
 
 const Demo: React.FC = () => {
 
   const [visible, setVisible] = useState<boolean>(false);
   const closeHandle = () => {
     setVisible(false);
   }
 
   return (
     <>
       <Button type="primary" onClick={() => { setVisible(true) }}>打开完全自定义footer的Drawer</Button>
       <Drawer
         visible={visible}
         width={400}
         title="完全自定义footer的Drawer"
         onClose={closeHandle}
         hasFooterLine
         footerAlign="right"
         renderFooter={
          <>
            <Button style={{ marginRight: 8 }} onClick={() => { setVisible(false) }}>取消</Button>
            <Button style={{ marginRight: 8 }} type="primary" onClick={() => { setVisible(false) }}>确定</Button>
            <Button type="primary" onClick={() => { setVisible(false) }}>这是一个自定义的按钮</Button>
          </>
         }
       >
         <div>
           完全自定义footer的Drawer<br/>
          </div>
       </Drawer>
     </>
   )
 }
 
 export default function DemoComponent() {
   const content = <Demo />
   return <Style>{content}</Style>
 }
 const Style = styled.div``
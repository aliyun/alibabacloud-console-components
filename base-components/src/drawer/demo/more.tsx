/**
 * @title 信息超过一屏
 * @description 信息超过一屏
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
       <Button type="primary" onClick={() => { setVisible(true) }}>打开信息超过一屏的Drawer</Button>
       <Drawer
         visible={visible}
         size="small"
         title="信息超过一屏的Drawer"
         onClose={closeHandle}
         onOk={closeHandle}
         onCancel={closeHandle}
       >
         <div>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          信息超过一屏的Drawer<br/>
          Drawer的底部<br/>
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
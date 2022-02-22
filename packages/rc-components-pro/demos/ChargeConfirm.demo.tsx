/**
 * @title 场景3
 */

import React from "react";
import { Button } from "@alicloud/console-components";
import { ChargeConfirmMessage, ChargeConfirmDialog } from "@alicloud/console-components-pro";
 
const Demo1: React.FC<{}> = (props) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <ChargeConfirmMessage
        title="计费提示"
        description="开通L2-1功能之后将会产生L2-1功能费用，L2-1功能计费说明L2-1功能计费说明L2-1功能计费说明L2-1明L2-1功能计费说明L2-1功能计费说明L2-1"
        link="#"
      >
        <>·您当前无可抵扣资源包 <a href="xxxx">xxxx 资源包</a> 可为您节省成本</>
      </ChargeConfirmMessage>

      <hr style={{margin: '20px 0'}}/>

      <Button onClick={() => setVisible(true)}>开启计费</Button>

      <ChargeConfirmDialog
        title="确认开启L2-2计费功能?"
        style={{width: 600}}
        visible={visible}
        messageProps={{
          title:"计费提示",
          description:"开通L2-1功能之后将会产生L2-1功能费用，L2-1功能计费说明L2-1功能计费说明L2-1功能计费说明L2-1明L2-1功能计费说明L2-1功能计费说明L2-1",
          link:"#",
          children: <>·您当前无可抵扣资源包 <a href="xxxx">xxxx 资源包</a> 可为您节省成本</>
        }}
        okProps={{children: "自定义文案"}}
        onCancel={() => setVisible(false)}
      >
        功能简介功能简介功能简介功能简介功能简介功能简介功能简介功能简介功能简介功能简介功能简介
      </ChargeConfirmDialog>
    </>
  )
};

export default Demo1;

/**
 * @title 场景一
 */

import React from "react";
import { Button } from "@alicloud/console-components";
import { UnsubscribeDialog } from "@alicloud/console-components-pro";

const Demo1: React.FC<{}> = (props) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <Button onClick={() => UnsubscribeDialog.open()}>退款</Button>
    </>
  )
};

export default Demo1;

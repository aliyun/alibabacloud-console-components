/**
 * @title demo2
 * @describe 场景三：multi-multi：多维度多类别单选
 * @canFullScreen
 */

import React from "react";
import { Search, IRcSearchProps } from "@alicloud/console-components-search";

// interface IProps {}

const Demo3: React.FC<IRcSearchProps> = (props) => {
  return <Search mode="multi-multi" options={[]} />;
};
 
export default Demo3;

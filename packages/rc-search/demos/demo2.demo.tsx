/**
 * @title demo2
 * @describe 场景二：single-multi：单维度多类别单选
 * @canFullScreen
 */

import React from "react";
import { Search, IRcSearchProps } from "@alicloud/console-components-search";

// interface IProps {}

const Demo2: React.FC<IRcSearchProps> = (props) => {
  return <Search mode="single-multi" options={[]} />;
};
 
export default Demo2;

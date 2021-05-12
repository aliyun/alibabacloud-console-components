import React from 'react';

/**
 * @public
 */

export interface ISelectDataItem {
  /**
   * 列表项ID
   */
  id: string;
  /**
   * 列表项标题
   */
  title?: React.ReactNode;
  /**
   * 列表项内容
   */
  description?: React.ReactNode;
  /**
   * 列表项是否被选中
   */
  selected?: boolean;
  /**
   * 列表项标签
   */
  tags?: string[];
}

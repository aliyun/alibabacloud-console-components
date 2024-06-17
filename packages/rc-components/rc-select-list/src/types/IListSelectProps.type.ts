import React from 'react';
import { SelectProps } from '@alicloud/console-components/types/select';
import { IListProps } from '../list';
import { ISelectDataItem } from "./ISelectDataItem.type";

/**
 * @public
 */

export interface IListSelectProps {
  /**
   * 单选还是多选
   * @defaultValue 'single'
   */
  mode?: 'multiple' | 'single';
  /**
   * 下拉选择列表数据。数据类型见`ISelectDataItem`
   */
  dataSource: ISelectDataItem[];
  /**
   * 当前被选中的id。必传，因为本组件只有受控模式
   */
  selectedIds: string[];
  /**
   * 用户选择发生变化的回调
   */
  onSelectChange?: (selectedIds: string[]) => void;
  /**
   * 搜索框值发生变化的回调<br />
   * 传入此属性，使得选择器拥有搜索功能，用户可以输入字符串进行搜索<br />
   * 一般要在此回调中更新`dataSource`（下拉选择列表数据）
   */
  onSearchChange?: (searchStr: string) => void;
  /**
   * 下拉菜单没有数据时的显示内容
   * @defaultValue <Card>No content</Card>
   */
  noContentView?: React.ReactNode;
  /**
   * @internal
   */
  listProps?: Omit<IListProps, 'data'>;
  /**
   * 透传给`<Select>`基础组件的props
   */
  selectProps?: SelectProps;
}

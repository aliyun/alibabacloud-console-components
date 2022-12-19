import React from 'react';
export interface IModalProps {
    prefix?: string;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChild;
    /**
     * 是否默认可见，非受控
     */
    defaultVisible?: boolean;
    /**
     * 是否可见，受控
     */
    visible?: boolean;
    /**
     * 点击关闭按钮回调
     */
    onClose?: () => void;
    /**
     * 点击返回按钮回调
     */
    onBack?: () => void;
    /**
     * 是否显示标题前的返回
     */
    hasArrow?: boolean;
    /**
     * Modal标题
     */
    title?: string;
    /**
     * Modal标题位置
     */
    titleAlign?: 'left' | 'center';
    /**
     * Modal标题是否可编辑
     */
    titleEditable?: boolean;
    /**
     * 标题编辑图标提示文案
     */
    titleEditTooltip?: string;
    /**
     * 可编辑时标题输入框的宽度
     */
    titleInputWidth?: string | number;
    /**
     * 标题编辑回调
     */
    onEditTitleChange?: (title: string) => void;
    /**
     * Modal描述
     */
    description?: string;
    /**
     * 操作区
     */
    operations?: React.ReactNode;
    /**
     * 侧边栏内容
     */
    sideDrawer?: React.ReactNode;
    /**
     * 侧边栏内容宽度
     */
    sideDrawerWidth?: number;
    /**
     * 侧边栏切换显示Switch前label
     */
    sideDrawerLabel?: string;
    /**
     * 侧边栏内容是否可见
     */
    sideDrawerVisible?: boolean;
    /**
     * 侧边栏内容切换可见回调
     */
    onSideDrawerVisibleChange?: (sideDrawerVisible: boolean) => void;
    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc?: boolean;
}
declare const _default: any;
export default _default;

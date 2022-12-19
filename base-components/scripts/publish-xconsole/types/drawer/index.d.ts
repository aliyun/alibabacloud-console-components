import React from 'react';
import { Drawer as NextDrawer } from '@alifd/next';
import { ButtonProps } from '@alifd/next/types/button';
declare type NextDrawerProps = React.ComponentProps<typeof NextDrawer>;
interface IDrawer {
    /**
     * 点击确定按钮时的回调。有此参数就默认显示确定按钮
     */
    onOk?: (event: React.MouseEvent) => void;
    /**
     * 点击取消按钮时的回调。有此参数就默认显示取消按钮
     */
    onCancel?: (event: React.MouseEvent) => void;
    /**
     * 完全自定义底部操作栏
     */
    renderFooter?: React.ReactNode;
    /**
     * 是否有底部分割线
     */
    hasFooterLine?: boolean;
    /**
     * 底部按钮位置
     */
    footerAlign?: 'left' | 'center' | 'right';
    /**
     * 取消按钮的文字
     */
    cancelText?: React.ReactNode;
    /**
     * 确定按钮的文字
     */
    okText?: React.ReactNode;
    /**
     * 透传给取消按钮的Props
     */
    cancelBtnProps?: ButtonProps;
    /**
     * 透传给确定按钮的Props
     */
    okBtnProps?: ButtonProps;
    /**
     * 给footer增加className
     */
    footerClass?: string;
    /**
     * 抽屉大小，也可以直接传入width自定义
     */
    size?: 'mini' | 'small' | 'medium' | 'large';
    /**
     * 引用方法
     */
    actionRef?: (show: () => void, close: () => void, setOKLoading: (loading: boolean) => void, setCancelLoading: (loading: boolean) => void) => void;
    className?: string;
}
export declare type DrawerProps = NextDrawerProps & IDrawer;
export declare type quickShowDrawerProps = Omit<DrawerProps, 'onOk' | 'onCancel'> & {
    /**
     * 点击确定按钮时的回调。有此参数就默认显示确定按钮
     */
    onOk?: (event: React.MouseEvent) => boolean | Promise<any>;
    /**
     * 点击取消按钮时的回调。有此参数就默认显示取消按钮
     */
    onCancel?: (event: React.MouseEvent) => boolean | Promise<any>;
    /**
     * 抽屉内容
     */
    content?: React.ReactNode;
};
export declare type QuickShowDrawerRet = {
    hide: () => void;
    show: () => void;
};
declare const Drawer: React.FC<DrawerProps> & {
    show: (config: quickShowDrawerProps) => QuickShowDrawerRet;
};
export default Drawer;

export * from '@alifd/next/types/drawer'

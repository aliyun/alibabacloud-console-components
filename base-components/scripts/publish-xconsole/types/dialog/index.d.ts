import React from 'react';
import { DialogProps, QuickShowConfig, QuickShowRet } from '@alifd/next/types/dialog';
declare type CustomDialogProps = DialogProps & {
    /**
     * 抽屉大小
     */
    size?: 'mini' | 'small' | 'medium' | 'large';
};
declare type CustomQuickShowConfig = QuickShowConfig & {
    /**
     * 抽屉大小
     */
    size?: 'mini' | 'small' | 'medium' | 'large';
};
declare const Dialog: React.FC<CustomDialogProps> & {
    show: (config: CustomQuickShowConfig) => QuickShowRet;
    confirm: (config: CustomQuickShowConfig) => QuickShowRet;
    alert: (config: CustomQuickShowConfig) => QuickShowRet;
};
export type { DialogProps } from '@alifd/next/lib/dialog';
export default Dialog;

export * from '@alifd/next/types/dialog'

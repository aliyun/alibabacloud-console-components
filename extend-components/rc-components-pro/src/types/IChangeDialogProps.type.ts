import { IChargeMessageProps } from "./IChargeMessageProps.type";
import { DialogProps } from '@alifd/next/types/dialog';

export interface IChargeDialogProps extends DialogProps {
  /**
   * 在弹窗中费用提示的配置
   */
  messageProps?: IChargeMessageProps;
}
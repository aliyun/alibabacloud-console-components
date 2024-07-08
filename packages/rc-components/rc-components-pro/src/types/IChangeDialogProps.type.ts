import type { DialogProps } from '@alicloud/console-components/types/dialog';

import type { IChargeMessageProps } from './IChargeMessageProps.type';

export interface IChargeDialogProps extends DialogProps {
  /**
   * 在弹窗中费用提示的配置
   */
  messageProps?: IChargeMessageProps;
}

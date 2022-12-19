export interface IChargeMessageProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 收费说明文档地址
   */
  link?: string;
  /**
   * 描述
   */
  description?: string;
   /**
   * 用户点击同意 checkout box 的回调
   */
  onCheck?: (value: boolean, e: any) => void

  /**
   * children
   */
  children?: React.ReactChild | React.ReactChildren;
}
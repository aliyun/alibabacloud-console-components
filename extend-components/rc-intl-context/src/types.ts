/**
 * @public
 */
export interface IMessages {
  [key: string]: string
}

/**
 * @public
 */
export interface IIntlCtxValue {
  locale?: string
  messages?: IMessages
  // Provider allow users to extend IIntlCtxValue with anything
  [key: string]: any
}

/**
 * @public
 */
export interface IProviderProps {
  locale?: string
  messages?: IMessages
  /**
   * User can add new properties to provide.
   */
  extend?:
    | object
    | ((providerProps: IProviderProps, contextValue: IIntlCtxValue) => object)
  // Provider allow users to pass any props
  // and use them in 'extend(this.props, contextValue)'
  [key: string]: any
}

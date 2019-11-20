import request from './request'

export interface IOptions {
  apiType?: string;
  ignoreError?: boolean;
  description?: any;
  risk?: any;
} 

const defaultOptions = {
  apiType: 'open',
  ignoreError: false,
  description: null,
}

export default (
  product: string,
  action?: string,
  options: IOptions = defaultOptions,
) => {
  if (!action) {
    // @ts-ignore
    return actions => request({
      data: {
        product,
        actions,
      },
      apiType: options.apiType,
      ignoreError: options.ignoreError,
      description: options.description,
      risk: options.risk,
    })
  }
  // @ts-ignore
  return params => request({
    data: {
      product,
      action,
      params,
    },
    apiType: options.apiType, // one-console 对应的接口类型
    ignoreError: options.ignoreError, // 是否忽略 api 异常
    description: options.description || action, // 当前请求的描述
    useCors: false,
    risk: options.risk,
  })
}
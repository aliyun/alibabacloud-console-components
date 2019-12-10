import createService from './createService'

export interface IOptions {
  ignoreError?: boolean;
  risk?: {
    code?: {
      [key: string]: string;
    },
    url?: {
      [key: string]: string;
    }
  }
}

export default (clientOptions: IOptions) => {
  function request(
    product: string,
    action?: string, 
    params?: {}, 
    options?: IOptions
  ): any;
  function request(
    product: string,
    action?: any[], 
    options?: IOptions
  ): any;
  function request(
    product: string,
    action: any, 
    params?: {}, 
    options?: IOptions
  ) {
    if (typeof action === 'string') {
     return createService(product, action, {
       apiType: 'plugin',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(params)
    } else {
     return createService(product, null, {
       apiType: 'plugin',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(action)
    }
  }

  return {
    request,
  }
}

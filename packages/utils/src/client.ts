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
  function openApi(
    product: string,
    action?: string, 
    params?: {}, 
    options?: IOptions
  ): any;
  function openApi(
    product: string,
    action?: any[], 
    options?: IOptions
  ): any;
  function openApi(
    product: string,
    action: any, 
    params?: {}, 
    options?: IOptions
  ) {
    if (typeof action === 'string') {
     return createService(product, action, {
       apiType: 'open',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(params)
    } else {
     return createService(product, null, {
       apiType: 'open',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(action)
    }
  };

  function innerApi(
    product: string,
    action?: string, 
    params?: {}, 
    options?: IOptions
  ): any;
  function innerApi(
    product: string,
    action?: any[], 
    options?: IOptions
  ): any;
  function innerApi(
    product: string,
    action: any, 
    params?: {}, 
    options?: IOptions
  ) {
    if (typeof action === 'string') {
     return createService(product, action, {
       apiType: 'inner',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(params)
    } else {
     return createService(product, null, {
       apiType: 'inner',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(action)
    }
  }

  function callApi(
    product: string,
    action?: string, 
    params?: {}, 
    options?: IOptions
  ): any;
  function callApi(
    product: string,
    action?: any[], 
    options?: IOptions
  ): any;
  function callApi(
    product: string,
    action: any, 
    params?: {}, 
    options?: IOptions
  ) {
    if (typeof action === 'string') {
     return createService(product, action, {
       apiType: 'app',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(params)
    } else {
     return createService(product, null, {
       apiType: 'app',
       ignoreError: false,
       ...clientOptions,
       ...options
     })(action)
    }
  }

  return {
    openApi,
    innerApi,
    callApi,
  }
}

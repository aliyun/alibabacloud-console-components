interface ILoadDocModule {
  resolveDocDef: (
    cdnType: 'jsdelivr' | 'unpkg',
    param: {
      pkgName: string
      version: string
    },
    path?: string
  ) => string
  (
    url: string | string[],
    deps?: {
      [name: string]: any
    }
  ): Promise<any>
}

interface Window {
  // @alicloud/console-components-lib-documenter/loadDocModule
  // 模块中包含了systemjs，后者不能在SSR环境中使用
  // 因此在gatsby-browser引它，把loadDocModule挂载到window上

  loadDocModule: ILoadDocModule
}

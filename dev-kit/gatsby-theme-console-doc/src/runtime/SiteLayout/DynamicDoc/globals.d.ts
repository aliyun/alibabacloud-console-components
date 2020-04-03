type ILoadDocModule = typeof import('@alicloud/console-components-lib-documenter').loadDocModule

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface Window {
  // @alicloud/console-components-lib-documenter/loadDocModule
  // 模块中包含了systemjs，后者不能在SSR环境中使用
  // 因此在gatsby-browser引它，把loadDocModule挂载到window上
  loadDocModule: ILoadDocModule
}

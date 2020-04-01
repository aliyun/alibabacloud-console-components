import externalsObj from './commonDeps'
import applyPlugin from './systemjs-amd-introp'
import { wrapMdxModule, IWrappedMdxModule } from '../MdxWrapper'
import resolveDocDef from './resolveDoc'

export interface IDocDef {
  prodPkgName: string
  actualLoadPkgName: string
  actualLoadPkgVersion: string
}

const cache: Map<string, Promise<IWrappedMdxModule>> = new Map()

export default function loadDocModule(
  url: string | string[], // 如果传string[]，则使用竞争的方式加载，提高加载速度，并提高容灾能力
  deps: { [name: string]: any } = {}
): Promise<IWrappedMdxModule> {
  const actualDeps = {
    ...externalsObj,
    ...deps,
  }

  const moduleId = (() => {
    // 用一个特殊的符号来分割要并行加载的地址
    if (Array.isArray(url)) return url.join('θ|θ')
    return String(url)
  })()

  if (cache.has(moduleId)) return cache.get(moduleId)!

  const SystemjsCtor: any = System.constructor
  const newSystemjsInstance = new SystemjsCtor()
  applyPlugin(newSystemjsInstance)

  newSystemjsInstance.shouldFetch = function () {
    return true
  }

  newSystemjsInstance.fetch = function (id) {
    if (id === moduleId) {
      return oneSuccess(id.split('θ|θ').map((u) => fetch(u)))
    }
    return fetch(id)
  }

  newSystemjsInstance.resolve = (request) => {
    if (request === moduleId) {
      return moduleId
    }
    // 在文档中请求外部依赖（比如react、styled-components）
    if (actualDeps[request]) {
      const module = actualDeps[request]
      // 实际上不会请求这个url，它只被作为模块的id
      const fakeURL = `https://deps.taobao.com/${request}`
      newSystemjsInstance.set(fakeURL, module)
      return fakeURL
    }
    // 在文档中请求包生产包名，则从cdn加载物料包
    // if (request === docDef.prodPkgName) {
    //   return protocalResolved.main
    // }
    throw new Error(
      `[@alicloud/console-components-lib-documenter] Unexpected request: ${request}`
    )
  }

  const promise = newSystemjsInstance.import(moduleId).then(wrapMdxModule)
  cache.set(moduleId, promise)
  return promise
}

// https://stackoverflow.com/a/37235274/8175856
function oneSuccess(promises) {
  return Promise.all(
    promises.map((p) => {
      // If a request fails, count that as a resolution so it will keep
      // waiting for other possible successes. If a request succeeds,
      // treat it as a rejection so Promise.all immediately bails out.
      return p.then(
        (val) => Promise.reject(val),
        (err) => Promise.resolve(err)
      )
    })
  ).then(
    // If '.all' resolved, we've just got an array of errors.
    (errors) => Promise.reject(errors),
    // If '.all' rejected, we've got the result we wanted.
    (val) => Promise.resolve(val)
  )
}

loadDocModule.resolveDocDef = resolveDocDef

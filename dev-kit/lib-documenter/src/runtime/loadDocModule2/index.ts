/* eslint-disable @typescript-eslint/no-non-null-assertion */
import externalsObj from './commonDeps'
import { wrapMdxModule, IWrappedMdxModule } from '../MdxWrapper'
import resolveDocUrl from './resolveDocUrl'
import { createLoader } from '../amdLoader'

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
  const moduleId = (() => {
    // 用一个特殊的符号来分割要并行加载的地址
    if (Array.isArray(url)) return url.join('θ|θ')
    return String(url)
  })()

  if (cache.has(moduleId)) return cache.get(moduleId)!

  const { loadAMD, register } = createLoader()
  const actualDeps = {
    ...externalsObj,
    ...deps,
  }
  Object.keys(actualDeps).forEach((depKey) => {
    const depVal = actualDeps[depKey]
    register(depKey, depVal)
  })

  const urlArr = Array.isArray(url) ? url : [url]
  const promise = oneSuccess(urlArr.map(loadAMD)).then(wrapMdxModule)
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

loadDocModule.resolveDocUrl = resolveDocUrl

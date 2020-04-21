/* eslint-disable no-return-assign */

/**
 * amd loader without global cache
 */
export function createLoader(): ILoader {
  const moduleCache: IModuleCache = Object.create(null)

  const loadCache: {
    [url: string]: Promise<object> | undefined
  } = Object.create(null)

  return {
    register,
    registerAMD,
    loadAMD,
    has,
    get,
  }

  function register(id: string, value: unknown) {
    if (has(id)) throw new Error(`Should not register twice. id: "${id}"`)
    moduleCache[id] = value
  }

  function has(id: string) {
    return {}.propertyIsEnumerable.call(moduleCache, id)
  }

  function get(id: string) {
    if (!has(id)) throw new Error(`Value not exists. id: "${id}"`)
    return moduleCache[id]
  }

  async function registerAMD(id: string, url: string) {
    const exports = await loadAMD(url)
    register(id, exports)
    return exports
  }

  async function loadAMD(url: string) {
    const cached = loadCache[url]
    if (cached) return cached
    return (loadCache[url] = _loadAMD(url))
  }

  async function _loadAMD(url: string) {
    const response = await fetch(url)
    if (!response.ok) throwErr(`${response.status} ${response.statusText}`)
    const contentType = response.headers.get('content-type')
    if (
      !contentType ||
      // regexp from https://github.com/systemjs/systemjs/blob/f1e5ec58fa67a156948951b81ade87e8c320682d/src/extras/module-types.js#L27
      !/^(text|application)\/(x-)?javascript(;|$)/.test(contentType)
    )
      throwErr(`Invalid content type "${contentType}"`)

    const code = await response.text()
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    const fn = new Function('define', code)
    let exports: null | object = null
    fn(define)
    if (!exports) throwErr(`define is not called in this amd module.`)
    return exports as object

    function define(dependencies: string[], factory: IFactory): void
    function define(factory: IFactory): void
    function define(
      dependencies: string[] | IFactory,
      factory?: IFactory
    ): void {
      if (typeof dependencies === 'string')
        throwErr(`AMD format with id is not supported.`)
      if (exports) throwErr(`define is called twice in this amd module.`)

      exports = Object.create(null)
      if (Array.isArray(dependencies) && typeof factory === 'function') {
        const depVals = dependencies.map((depId) => {
          if (depId === 'exports') return exports
          if (!has(depId)) throwErr(`Can't resolve dependency "${depId}".`)
          return get(depId)
        })
        factory(...depVals)
      } else if (typeof dependencies === 'function') {
        dependencies()
      } else {
        throwErr(`Invalid define call.`)
      }
    }

    function throwErr(msg: string): never {
      throw new Error(`[loader] Fail to load "${url}".\n${msg}`)
    }

    type IFactory = (...args: unknown[]) => void
  }
}

interface IModuleCache {
  [name: string]: unknown
}

interface ILoader {
  register: (id: string, value: unknown) => void
  /**
   * Load and execute amd module. And register its exports to this scope.
   * The dependencies is resolved from this scope.
   */
  registerAMD: (id: string, url: string) => Promise<object>
  /**
   * Load and execute amd module.
   * The dependencies is resolved from this scope.
   */
  loadAMD: (url: string) => Promise<object>
  has: (id: string) => boolean
  get: (id: string) => unknown
}

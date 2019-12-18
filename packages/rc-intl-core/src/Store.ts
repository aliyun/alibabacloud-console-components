const glob: any = (() => {
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  return {}
})()

const WIND_INTL_STORE = '__WIND_INTL_STORE__'

if (!glob[WIND_INTL_STORE]) {
  glob[WIND_INTL_STORE] = {}
}

class Store {
  private _store: { [key: string]: any }

  public static create(isCrossModules = true) {
    return new Store(isCrossModules)
  }

  public constructor(isCrossModules = true) {
    this._store = isCrossModules ? glob[WIND_INTL_STORE] : {}
  }

  public set(key: string, value: any) {
    this._store[key] = value
  }

  public get(key: string) {
    return this._store[key]
  }
}

export default Store

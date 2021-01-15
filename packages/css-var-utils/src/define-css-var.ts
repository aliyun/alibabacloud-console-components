interface IDefineCssVar {
  default?: string
  desc?: string
  // TODO: 开发chrome插件，可以看到页面上有哪些css-var，并且可以调试它们
  // chrome插件通过类似于react devTool的协议与页面上的cssVar对象通信
  // 无论是使用styled-components还是css-modules还是sass开发样式，都可以实现这个协议，与chrome插件交互
  // 是否生成文档，是否展示在chrome插件中
  // public?: boolean
  // dataType?: string
}

interface IDefineCssVars {
  [name: string]: IDefineCssVar
}

export class CssVar implements IDefineCssVar {
  name: string
  default: string | undefined
  desc: string | undefined

  constructor(opts: { name: string; default?: string; desc?: string }) {
    this.name = opts.name
    this.default = opts.default
    this.desc = opts.desc
  }

  get consume() {
    if (this.default) {
      return `var(${this.name}, ${this.default})`
    } else {
      return `var(${this.name})`
    }
  }

  get consumeStyled(): (props: any) => string {
    // 用于styled-components的样式声明中
    // 优先使用外层Provider的主题
    return (props: any) =>
      props.theme?.cssVars?.[this.name]?.consume ?? this.consume
  }
}

export interface ICssVars {
  [name: string]: CssVar
}

///////// type inference

type GetCssVars<Definition extends IDefineCssVars> = {
  [Name in keyof Definition]: CssVar
}

type IStyleObjecy<CssVars extends ICssVars> = {
  [Name in keyof CssVars]: string | undefined
}

type OverWriteCssVars<CssVars extends ICssVars> = {
  [Name in keyof CssVars]?: string
}

type GetOverwritten<
  CssVars extends ICssVars,
  Overwrite extends OverWriteCssVars<CssVars>
> = {
  // 继承父集合的变量
  [Name in keyof CssVars]: CssVar
} &
  {
    [Name in keyof Overwrite]: CssVar
  }

///////// type inference end

function defineCssVars<Definition extends IDefineCssVars>(
  definitions: Definition
): GetCssVars<Definition> {
  const result: ICssVars = {}
  Object.entries(definitions).forEach(([name, definition]) => {
    // @ts-ignore
    result[name] = new CssVar({ name, ...definition })
  })
  return result as any
}

/**
 * overwrite参数中，只能传入vars中定义过的属性，否则ts类型报错。
 * 这样能防止用户写错属性名。
 */
function overwriteCssVars<
  CssVars extends ICssVars,
  Overwrite extends OverWriteCssVars<CssVars>
>(
  vars: CssVars,
  // NoExtraProperties 的作用是禁止用户传入CssVars之外的属性
  // https://stackoverflow.com/a/57117594/8175856
  overwrite: OverWriteCssVars<CssVars> &
    NoExtraProperties<OverWriteCssVars<CssVars>, Overwrite>
): GetOverwritten<CssVars, Overwrite> {
  const result: { [name: string]: any } = {}
  Object.entries(vars).forEach(([name, cssVar]) => {
    const overwriteVal = overwrite[name]
    if (overwriteVal) {
      result[name] = new CssVar({
        ...cssVar,
        default: overwriteVal,
      })
    } else {
      result[name] = cssVar
    }
  })
  return result as any
}

function toStyleObject<CssVars extends ICssVars>(vars: CssVars) {
  const result: { [name: string]: string | undefined } = {}
  Object.entries(vars).forEach(([name, v]) => {
    result[name] = v.default
  })
  return result
}

const constructor_key = 'You must not call the constructor of CssVarTheme. Call CssVarTheme.create instead.' as const

export class CssVarTheme<CssVars extends ICssVars> {
  private _vars: CssVars

  private constructor(_vars: CssVars, key: typeof constructor_key) {
    // 调用构造函数只允许被内部调用
    if (key !== constructor_key) throw new Error(constructor_key)
    this._vars = _vars
  }
  static create<Definition extends IDefineCssVars>(
    definitions: Definition
  ): CssVarTheme<GetCssVars<Definition>> {
    return new CssVarTheme(defineCssVars(definitions), constructor_key)
  }
  extends<Overwrite extends OverWriteCssVars<CssVars>>(
    overwrite: OverWriteCssVars<CssVars> &
      NoExtraProperties<OverWriteCssVars<CssVars>, Overwrite>
  ): CssVarTheme<GetOverwritten<CssVars, Overwrite>> {
    const newVars = overwriteCssVars(this._vars, overwrite)
    return new CssVarTheme(newVars, constructor_key)
  }
  /**
   * 主题变量集合
   */
  get vars(): CssVars {
    return this._vars
  }
  /**
   * 产生主题变量定义，即name->value映射
   */
  values(): IStyleObjecy<CssVars> {
    return toStyleObject(this._vars) as any
  }
}

// util types
type Impossible<K extends keyof any> = {
  [P in K]: never
}
type NoExtraProperties<T, U extends T = T> = U &
  Impossible<Exclude<keyof U, keyof T>>

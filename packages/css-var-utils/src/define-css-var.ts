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

  get use() {
    if (this.default) {
      return `var(${this.name}, ${this.default})`
    } else {
      return `var(${this.name})`
    }
  }

  get useTheme(): (props: any) => string {
    return (props: any) => props.theme?.cssVars?.[this.name]?.use ?? this.use
  }
}

export interface ICssVars {
  [name: string]: CssVar
}

///////// type inference

type GetCssVars<Definition extends IDefineCssVars> = {
  [Name in keyof Definition]: CssVar
}

type IStyleObjecy<CssVars extends object> = {
  [Name in keyof CssVars]: string | undefined
}

type OverWriteCssVars<CssVars extends ICssVars> = {
  [Name in keyof CssVars]?: string
}

type GetOverwritten<
  CssVars extends ICssVars,
  Overwrite extends OverWriteCssVars<CssVars>
> = {
  [Name in keyof CssVars]: CssVar
} &
  {
    [Name in keyof Overwrite]: CssVar
  }

///////// type inference end

export function defineCssVars<Definition extends IDefineCssVars>(
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
export function overwriteCssVars<CssVars extends ICssVars>(
  vars: CssVars,
  // 禁止用户传入CssVars之外的属性
  overwrite: OverWriteCssVars<CssVars> & {}
): GetOverwritten<CssVars, OverWriteCssVars<CssVars>> {
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

export function toStyleObject<CssVars extends ICssVars>(vars: CssVars) {
  const result: { [name: string]: string | undefined } = {}
  Object.entries(vars).forEach(([name, v]) => {
    result[name] = v.default
  })
  return result
}

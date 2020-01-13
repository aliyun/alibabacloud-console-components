import * as path from 'path'
import fs from 'fs-extra'
import filenamify from 'filenamify'
import * as crypto from 'crypto'

const cacheDir = path.resolve(__dirname, '.cache')
fs.emptyDirSync(cacheDir)

export default async function(this: any, source: string) {
  this.async()

  if (this.query && this.query.bundleDemo === false) {
    this.callback(
      null,
      `export default null;
    export const _demoInfo = __demo_loader_placeholder__`
    )
    return
  }

  if (this.query && this.query.bundleDemo === 'async') {
    const hash = crypto
      .createHash('md5')
      .update(this.resourcePath)
      .digest('hex')

    const actualModulePath = path.resolve(
      cacheDir,
      `${hash}--${filenamify(this.resourcePath, {
        maxLength: Number.MAX_SAFE_INTEGER,
        replacement: '）',
      }).substr(-50)}`
    )

    await fs.writeFile(actualModulePath, source)
    this.callback(
      null,
      `
    const isSSR = typeof window === "undefined";
    const loadingModule = import('${actualModulePath}').catch(reason => {
      // 服务端渲染的时候，忽略异步引入的模块中的错误（可能是因为使用了window对象）
      if (isSSR) return;
      throw reason;
    });
    export default loadingModule;
    export const _demoInfo = __demo_loader_placeholder__;    
`
    )
    return
  }

  this.callback(
    null,
    `${source};
  export const _demoInfo = __demo_loader_placeholder__`
  )
}

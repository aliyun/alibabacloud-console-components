const path = require('path')
const webpack = require('webpack')
const fs = require('fs-extra')

exports.bootWebpack = webpackConfig => {
  webpack(webpackConfig, (err, stats) => {
    // Stats Object
    if (err) {
      process.exitCode = 1
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      return
    }

    const info = stats.toJson()

    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }

    if (stats.hasErrors()) {
      process.exitCode = 1
      console.error(info.errors)
      return
    }

    console.log(
      stats.toString({
        // Add console colors
        colors: true,
      })
    )
  })
}

// 未来可以从配置读取config
exports.getCmdArgs = () => {
  const argv = require('yargs').argv

  const rootDir = path.resolve(process.cwd(), argv.rootDir || '.')

  // README.mdx的默认位置
  const entryMDX = path.resolve(rootDir, 'README.mdx')

  const pkgJsonPath = path.resolve(rootDir, 'package.json')
  const backupPkgJsonPath = path.resolve(rootDir, 'package.json.backup')

  // prodPkgName的默认值：从package.json读取包名
  const prodPkgName = (() => {
    try {
      // 如果存在backup，说明当前正在执行publish-preview脚本，此时pknName已经被改成了预览包名
      // 此时需要从package.json.backup获取生产包名
      const pkgJSON = JSON.parse(fs.readFileSync(backupPkgJsonPath))
      return pkgJSON.name
    } catch (error) {
      // 找不到package.json.backup是正常的，可能用户在npm run prepare，而不是运行发布脚本
      if (!error.message.startsWith('ENOENT: no such file or directory')) {
        throw error
      }
    }
    const pkgJSON = require(pkgJsonPath)
    return pkgJSON.name
  })()

  return {
    argv,
    rootDir,
    entryMDX,
    prodPkgName,
    pkgJsonPath,
    backupPkgJsonPath,
  }
}

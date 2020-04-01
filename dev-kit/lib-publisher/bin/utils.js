/* eslint-disable no-console */
const path = require('path')
const webpack = require('webpack')
const fs = require('fs-extra')
const { argv } = require('yargs')
const pkgJson = require('../package.json')

exports.bootWebpack = (webpackConfig) => {
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
      info.errors.forEach((err) => {
        console.error(err)
        console.log('\n')
      })
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
  const rootDir = path.resolve(process.cwd(), argv.rootDir || '.')

  const docsConfig = (() => {
    const cfgFilePath = path.resolve(rootDir, 'docs.config.js')
    if (fs.existsSync(cfgFilePath)) {
      return require(cfgFilePath)
    }
    return null
  })()

  // README.mdx的默认位置
  const entryMDX = (() => {
    const mdx = path.resolve(rootDir, 'README.mdx')
    // 优先找.mdx，不存在则找.md
    if (fs.existsSync(mdx)) {
      return mdx
    }
    return path.resolve(rootDir, 'README.md')
  })()

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
    // eslint-disable-next-line import/no-dynamic-require, global-require
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
    docsConfig,
  }
}

exports.logToolVersion = () => {
  console.log(`toolInfo: ${pkgJson.name}@${pkgJson.version}`)
}

/**
 * @param action 'preview' | 'build'
 */
exports.normalizeConfig = (cfg, action, cliArgv) => {
  const globalMode = cfg.mode
  const globalExternals = cfg.externals || []
  const globalAlias = cfg.alias || {}
  const globalOutputDir = cfg.outputDir

  const docConfigName = (() => {
    if (cliArgv.name) return cliArgv.name
    return cfg.name
  })()

  const analyze = (() => {
    if ('analyze' in cliArgv) return cliArgv.analyze
    return cfg.analyze
  })()

  const actionConfigOverwrite = (() => {
    switch (action) {
      case 'preview':
        return cfg.devServeConfig
      case 'build':
        return cfg.buildConfig
      default:
        throw new Error(
          `doc.config.js => action should be 'preview' or 'build'`
        )
    }
  })()

  const compilations = Object.keys(cfg.compilations)
    .filter((name) => {
      // 在预览模式下，要通过name来选中某个文档
      if (docConfigName) return name === docConfigName
      return true
    })
    .map((name) => {
      const {
        entry,
        outputDir = globalOutputDir,
        outputFileName,
        mode = actionConfigOverwrite.mode || globalMode,
        externals = [],
        alias,
      } = cfg.compilations[name]

      if (!outputDir)
        throw new Error(`outputDir should be set in doc.config.js`)
      if (!entry) throw new Error(`entry should be set in doc.config.js`)
      if (!outputFileName)
        throw new Error(`outputFileName should be set in doc.config.js`)

      return {
        name,
        mode: mode || 'production',
        entry,
        outputDir,
        outputFileName,
        externals: [
          ...globalExternals,
          ...(actionConfigOverwrite.externals || []),
          ...externals,
        ],
        alias: {
          ...globalAlias,
          ...actionConfigOverwrite.alias,
          ...alias,
        },
        analyze,
      }
    })

  if (compilations.length === 0) {
    throw new Error(
      `No doc to process. Please check your doc.config.js and argv.name`
    )
  }

  if (action === 'preview' && compilations.length > 1) {
    throw new Error(
      `You should use argv.name to select one document to preview`
    )
  }
  if (analyze && compilations.length > 1) {
    throw new Error(
      `You should use argv.name to select one document to analyze`
    )
  }
  return compilations
}

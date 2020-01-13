#! /usr/bin/env node

const path = require('path')
const { spawn } = require('child_process')
const fs = require('fs-extra')
const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor')
const argv = require('yargs').argv

// 前置条件：用户已经执行了tsc并在<rootDir>/lib/index.d.ts生成了类型声明，脚本会检查

;(async function main() {
  const configObject = ExtractorConfig.loadFile(
    require.resolve(
      '@alicloud/console-components-lib-publisher/build-doc/api-extractor.json'
    )
  )

  const rootDir = path.resolve(process.cwd(), argv.rootDir || '.')
  await assertDirExist(rootDir)

  const packageJsonFullPath = path.resolve(rootDir, 'package.json')
  await assertFileExist(packageJsonFullPath)
  // 假装api-extractor.json放在这个地方，欺骗@microsoft/api-extractor
  const configObjectFullPath = path.resolve(rootDir, 'api-extractor.json')
  const indexDTSPath = path.resolve(rootDir, 'lib/index.d.ts')
  try {
    await assertFileExist(indexDTSPath)
  } catch (error) {
    throw new Error(`没有在路径“${indexDTSPath}”检测到index.d.ts，
    请先执行tsc -p ./src/tsconfig.json来生成类型声明文件。`)
  }

  const extractorConfig = ExtractorConfig.prepare({
    configObject,
    configObjectFullPath,
    packageJsonFullPath,
  })

  // Invoke API Extractor
  const extractorResult = Extractor.invoke(extractorConfig, {
    // Equivalent to the "--local" command-line parameter
    localBuild: true,
    // Equivalent to the "--verbose" command-line parameter
    showVerboseMessages: true,
  })

  if (extractorResult.succeeded) {
    console.log(`API Extractor completed successfully`)
  } else {
    console.error(
      `API Extractor completed with ${extractorResult.errorCount} errors` +
        ` and ${extractorResult.warningCount} warnings`
    )
    process.exitCode = 1
    return
  }

  const code = await callAPIDocumenter(rootDir)
  process.exitCode = code
  return
})()

async function callAPIDocumenter(rootDir) {
  return new Promise((res, rej) => {
    const child = spawn(
      'wind-api-documenter',
      [
        'flatten-json',
        '--input-folder',
        'cc-dev-out/api-extractor',
        '--output-folder',
        'cc-dev-out/api-json',
        '--output-file-name',
        'api.json',
      ],
      {
        cwd: rootDir,
      }
    )

    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)

    child.on('exit', code => {
      if (code === 0) {
        console.log(`wind-api-documenter completed sussessfully!`)
        res(code)
      } else {
        console.log(`wind-api-documenter completed with error!`)
        rej(code)
      }
    })
  })
}

async function assertDirExist(path) {
  try {
    const stats = await fs.stat(path)
    if (!stats.isDirectory()) {
      throw new Error()
    }
  } catch (error) {
    throw new Error(`${path} is not a dir`)
  }
}

async function assertFileExist(path) {
  try {
    const stats = await fs.stat(path)
    if (!stats.isFile()) {
      throw new Error()
    }
  } catch (error) {
    throw new Error(`${path} is not a dir`)
  }
}

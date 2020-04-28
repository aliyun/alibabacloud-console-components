#! /usr/bin/env node

import * as path from 'path'
import * as fs from 'fs-extra'
import chalk from 'chalk'
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'

// 前置条件：用户已经执行了tsc并在<rootDir>/lib/index.d.ts生成了类型声明，脚本会检查

export default async (args: IExtractArgs) => {
  // eslint-disable-next-line no-console
  const { log = console.log, logError = console.error } = args

  const configObject = ExtractorConfig.loadFile(
    require.resolve(
      '@alicloud/console-components-lib-publisher/build-doc/api-extractor.json'
    )
  )

  const cwd = args.cwd ?? process.cwd()

  const rootDir = path.resolve(cwd, '.')
  await assertDirExist(rootDir)

  const packageJsonFullPath = path.resolve(rootDir, 'package.json')
  await assertFileExist(packageJsonFullPath)
  // 假装api-extractor.json放在这个地方，欺骗@microsoft/api-extractor
  const configObjectFullPath = path.resolve(rootDir, 'api-extractor.json')
  const indexDTSPath = path.resolve(rootDir, 'lib/index.d.ts')
  try {
    await assertFileExist(indexDTSPath)
  } catch (error) {
    throw new Error(`没有在检测到“${indexDTSPath}”，
    请先执行tsc来生成类型声明文件。`)
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
    log(chalk.green.bold('API Extractor completed successfully'))
  } else {
    logError(
      chalk.red.bgYellow.bold(
        `API Extractor completed with ${extractorResult.errorCount} errors` +
          ` and ${extractorResult.warningCount} warnings`
      )
    )
    return false
  }
  return true
}

async function assertDirExist(p) {
  try {
    const stats = await fs.stat(p)
    if (!stats.isDirectory()) {
      throw new Error()
    }
  } catch (error) {
    throw new Error(`${p} is not a dir`)
  }
}

async function assertFileExist(p) {
  try {
    const stats = await fs.stat(p)
    if (!stats.isFile()) {
      throw new Error()
    }
  } catch (error) {
    throw new Error(`${p} is not a dir`)
  }
}

export interface IExtractArgs {
  cwd: string
  log?: Console['log']
  logError?: Console['error']
}

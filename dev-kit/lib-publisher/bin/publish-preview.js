#! /usr/bin/env node

const libnpm = require('libnpm')
const semver = require('semver')
const path = require('path')
const { spawn } = require('child_process')
const fs = require('fs-extra')

const {
  pkgJsonPath,
  backupPkgJsonPath,
  prodPkgName,
  rootDir,
} = require('./utils').getCmdArgs()
const npmRcPath = path.resolve(rootDir, '.npmrc')
const backupNpmRcPath = path.resolve(rootDir, '.npmrc.backup')

// 这个token对应的npm账号是用临时邮箱申请的，
// 专门用来存放临时demo，泄露也不会造成安全隐患。
// 任何人都可以用这个公共token来发布包。
const npmToken = `be1ee14a-9db9-4c0f-b6b0-f88e13cba80e`

;(async () => {
  if (await fs.exists(backupNpmRcPath)) {
    // 如果存在.npmrc.backup，自动恢复
    const backupNpmRcText = await fs.readFile(backupNpmRcPath, 'utf-8')
    if (backupNpmRcText) await fs.writeFile(npmRcPath, backupNpmRcText)
    else await fs.unlink(npmRcPath)
    await fs.unlink(backupNpmRcPath)
  }
  if (await fs.exists(backupPkgJsonPath)) {
    throw new Error(`\n发现上次执行脚本遗留的package.json.backup。
    这说明上次执行脚本的过程被强行中断了（进程被直接杀死，发布脚本中的finally块没有被执行）。
    请先检查一下您目前的package.json的【name、 version】字段是否正常，
    确认package.json正常以后，将package.json.backup文件手动删除。
    然后重试当前命令即可。`)
  }

  const curPkgJsonText = await fs.readFile(pkgJsonPath, 'utf-8')
  const curPkgJson = JSON.parse(curPkgJsonText)

  const curNpmRcText = await (async () => {
    try {
      return await fs.readFile(npmRcPath, 'utf-8')
    } catch (error) {
      if (error.message.startsWith('ENOENT: no such file or directory'))
        return ''
      throw error
    }
  })()
  // 在.npmrc中加入公共token
  const newNpmRcText = `${curNpmRcText}

# 这个token对应的npm账号是用临时邮箱申请的，
# 专门用来存放临时demo，泄露也不会造成安全隐患。
# 任何人都可以用这个公共token来发布包。
//registry.npmjs.org/:_authToken=${npmToken}
`

  // 生产包名转换为预览包名
  const previewPkgName = getPreviewPkgName(prodPkgName)

  const curVersion = curPkgJson.version
  const previewPkgVersion = await getNextPreviewVer(
    previewPkgName,
    curVersion,
    'patch'
  )

  const newPkgJson = {
    ...curPkgJson,
    name: previewPkgName,
    version: previewPkgVersion,
  }

  await fs.writeFile(backupPkgJsonPath, curPkgJsonText, 'utf-8')
  await fs.writeFile(pkgJsonPath, JSON.stringify(newPkgJson, null, 2), 'utf-8')
  await fs.writeFile(backupNpmRcPath, curNpmRcText, 'utf-8')
  await fs.writeFile(npmRcPath, newNpmRcText, 'utf-8')
  try {
    await new Promise((res, rej) => {
      const childProc = spawn('npm', ['publish', '--tag', 'preview'])
      childProc.stdout.pipe(process.stdout)
      childProc.stderr.pipe(process.stderr)
      childProc.on('exit', code => {
        if (code !== 0) {
          rej(code)
          return
        }
        res(0)
      })
    })
  } finally {
    await fs.writeFile(pkgJsonPath, curPkgJsonText, 'utf-8')
    await fs.unlink(backupPkgJsonPath)
    if (curNpmRcText) {
      await fs.writeFile(npmRcPath, curNpmRcText, 'utf-8')
    } else {
      await fs.unlink(npmRcPath)
    }
    await fs.unlink(backupNpmRcPath)
  }

  // TODO: 如果由开发者来发布npm包（即使是preview版本），那么平台很难管控包的发布
  // 解法：区分生产包和预览包，生产包由平台服务代理发布到npm
})()

async function getNextPreviewVer(pkgName, _curVer, inc) {
  if (!['major', 'minor', 'patch'].includes(inc))
    throw new Error(`inc should be one of ['major', 'minor', 'patch']`)
  const curVer = (() => {
    // 0.x的时候会有奇怪的semver规则。。。
    // 为了逻辑简单我们避免发布0.x版本的预览包
    if (semver.major(_curVer) === 0) {
      return semver.inc(_curVer, 'major')
    }
    return _curVer
  })()
  const newVer = semver.inc(curVer, inc)
  const major = semver.major(newVer)
  const minor = semver.minor(newVer)
  const patch = semver.patch(newVer)
  const cleanVer = `${major}.${minor}.${patch}`
  const nextPreviewVer = await (async () => {
    try {
      const pkgRange = `${pkgName}@>=${cleanVer}-preview.0 <${cleanVer}`
      const res = await libnpm.manifest(pkgRange)
      const latestPreviewVer = res.version
      return semver.inc(latestPreviewVer, 'prerelease', 'preview')
    } catch (error) {
      if (error.message.startsWith('No matching version found for ')) {
        return `${cleanVer}-preview.0`
      }
      // 包不存在
      if (error.message.startsWith('404 Not Found')) {
        return '1.0.0-preview.0'
      }
      throw error
    }
  })()

  return nextPreviewVer
}

function getPreviewPkgName(prodPkgName) {
  const split = prodPkgName.split('/')
  if (split.length === 1) {
    return `@cc-dev-kit-test/${split[0]}`
  }
  if (split.length === 2) {
    const [scope, name] = split
    return `@cc-dev-kit-test/${name}`
  }
  throw new Error(`unexpected pkg name: ${prodPkgName}`)
}

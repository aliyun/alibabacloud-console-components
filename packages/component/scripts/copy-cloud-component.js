const ncp = require('ncp').ncp
const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const postcss = require('postcss')

const esmDir = path.join(__dirname, '../esm')
const libDir = path.join(__dirname, '../lib')
const distDir = path.join(__dirname, '../dist')

const cloudComponentDir = path.dirname(
  require.resolve('@alicloudfe/components/package.json')
)

rimraf.sync(esmDir)
rimraf.sync(libDir)
rimraf.sync(distDir)
;(async () => {
  await Promise.all([
    copy(path.join(cloudComponentDir, 'es'), esmDir),
    copy(path.join(cloudComponentDir, 'lib'), libDir),
    fs.copy(
      path.join(cloudComponentDir, 'dist/xconsole.css'),
      path.join(distDir, 'xconsole.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/xconsole-no-reset.css'),
      path.join(distDir, 'xconsole-noreset.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/xconsole-var.css'),
      path.join(distDir, 'xconsole-var.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/wind.css'),
      path.join(distDir, 'wind.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/wind-no-reset.css'),
      path.join(distDir, 'wind-noreset.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/wind-var.css'),
      path.join(distDir, 'wind-var.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/index.js'),
      path.join(distDir, 'wind.js')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/index.js'),
      path.join(distDir, 'wind.min.js')
    ),
  ])

  const version = await (async () => {
    const pkgJson = await fs.readJson(path.join(__dirname, '../package.json'))
    return pkgJson['version']
  })()

  await Promise.all([
    minify(path.join(distDir, 'wind.css'), path.join(distDir, 'wind.min.css')),
    minify(
      path.join(distDir, 'wind-noreset.css'),
      path.join(distDir, 'wind-noreset.min.css')
    ),
    appendFile(
      path.join(esmDir, 'index.js'),
      `export const __VERSION__ = (void 0, 'version!!@alicloud/console-components', '${version}');`
    ),
    appendFile(
      path.join(libDir, 'index.js'),
      `Object.defineProperty(exports, "__VERSION__", { enumerable: true, get: function () { return '${version}'; } });`
    ),
  ])
})()

async function copy(source, dest) {
  return new Promise((res, rej) => {
    ncp(source, dest, function (err) {
      if (err) return rej(err)
      return res()
    })
  })
}

async function minify(source, dest) {
  const sourceContent = await fs.readFile(source, 'utf-8')
  const result = await postcss([
    require('cssnano')({
      preset: 'default',
    }),
  ]).process(sourceContent, { from: source, to: dest })
  await fs.writeFile(dest, result.css)
}

async function appendFile(filePath, append) {
  const source = await fs.readFile(filePath, 'utf-8')
  const result = source + '\n' + append
  await fs.writeFile(filePath, result)
}

const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')
const ncp = require('ncp').ncp

function getComponentNames() {
  const excludesComponentNames = ['utils', 'theme', 'locale']
  const baseDir = path.resolve(__dirname, '../src')
  const componentNames = fs
    .readdirSync(baseDir)
    .filter((name) => fs.statSync(path.join(baseDir, name)).isDirectory())
  const exactComponentNames = _.xor(componentNames, excludesComponentNames)
  return exactComponentNames
}

async function copy(source, dest) {
  return new Promise((res, rej) => {
    ncp(source, dest, function (err) {
      if (err) return rej(err)
      return res()
    })
  })
}

async function appendFile(filePath, append) {
  const source = await fs.readFile(filePath, 'utf-8')
  const result = source + '\n' + append
  await fs.writeFile(filePath, result)
}

async function updateFile(filePath, updater) {
  const source = await fs.readFile(filePath, 'utf-8')
  const result = await updater(source)
  await fs.writeFile(filePath, result)
}

function codeExportLibInfoESM(name, version) {
  return `export var __LIB_INFO = {
  'type': '__LIB_INFO',
  'name': '${name}',
  'version': '${version}'
};
if (typeof window === "object") {
  window['__lib_info_array'] = window['__lib_info_array'] || [];
  window['__lib_info_array'].push(__LIB_INFO);
}
`
}

function codeExportLibInfoCJS(name, version) {
  return `var __LIB_INFO = {
  'type': '__LIB_INFO',
  'name': '${name}',
  'version': '${version}'
};
if (typeof window === "object") {
  window['__lib_info_array'] = window['__lib_info_array'] || [];
  window['__lib_info_array'].push(__LIB_INFO);
}
Object.defineProperty(exports, "__LIB_INFO", { enumerable: true, get: function () { return __LIB_INFO; } });`
}

// export * from 'fromPath';
function getCommonJSReExport(fromPath) {
  return [`var from = require("${fromPath}");`, `module.exports = from;`]
}

// export * from 'fromPath';
function getESMReExport(fromPath) {
  return [
    `export * from "${fromPath}";`,
    `export { default } from "${fromPath}";`
  ]
}

module.exports = {
  getComponentNames,
  copy,
  appendFile,
  updateFile,
  codeExportLibInfoESM,
  codeExportLibInfoCJS,
  getCommonJSReExport,
  getESMReExport
}

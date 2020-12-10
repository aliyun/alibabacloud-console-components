/* eslint-disable  */
const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')

const excludesComponentNames = ['utils', 'theme']

function getComponentNames() {
  const baseDir = path.resolve(__dirname, '..', 'lib')
  const componentNames = fs
    .readdirSync(baseDir)
    .filter((name) => fs.statSync(path.join(baseDir, name)).isDirectory())
  const exactComponentNames = _.xor(componentNames, excludesComponentNames)
  return exactComponentNames
}

// export * from 'fromPath';
function getCommonJSReExport(fromPath) {
  return [`var from = require("${fromPath}");`, `module.exports = from;`]
}

// export * from 'fromPath';
function getESMReExport(fromPath) {
  return [
    `export * from "${fromPath}";`,
    `export { default } from "${fromPath}";`,
  ]
}

function isDirHasFile(dir) {
  fs.ensureDirSync(dir)
  const contents = fs.readdirSync(dir)
  const hasFile = contents.some((content) => {
    return !fs.statSync(path.join(dir, content)).isDirectory()
  })
  return hasFile
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

module.exports = {
  getComponentNames,
  getCommonJSReExport,
  getESMReExport,
  isDirHasFile,
  codeExportLibInfoESM,
  codeExportLibInfoCJS,
}

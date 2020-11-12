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

module.exports = {
  getComponentNames,
  getCommonJSReExport,
  getESMReExport,
  isDirHasFile,
}

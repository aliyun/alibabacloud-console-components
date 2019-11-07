/* eslint-disable  */
const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')

const excludesComponentNames = []

function getComponentNames() {
  const componentNames = fs.readdirSync(
    path.resolve(__dirname, '..', 'lib', '_', 'components')
  )
  const exactComponentNames = _.xor(componentNames, excludesComponentNames)
  return exactComponentNames
}

// export * from 'fromPath';
function getCommonJSReExport(fromPath) {
  return [`var from = require("${fromPath}");`, `module.exports = from;`]
}

function isDirHasFile(dir) {
  fs.ensureDirSync(dir)
  const contents = fs.readdirSync(dir)
  const hasFile = contents.some(content => {
    return !fs.statSync(path.join(dir, content)).isDirectory()
  })
  return hasFile
}

module.exports = {
  getComponentNames,
  getCommonJSReExport,
  isDirHasFile,
}

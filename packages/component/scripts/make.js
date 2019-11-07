/* eslint-disable */
const _ = require('lodash')
const path = require('path')
const fs = require('fs-extra')
const readDir = require('recursive-readdir')
const chalk = require('chalk')
const utils = require('./utils')

const INDEX_FILE = 'index.js'
const INDEX_SCSS_FILE = 'index.scss'
const INDEX_DTS_FILE = 'index.d.ts'
const WORKSPACE_PATH = path.resolve(__dirname, '..')
const LIB_PATH = path.resolve(WORKSPACE_PATH, 'lib')
const DTS_PATH = path.resolve(WORKSPACE_PATH, 'types')
const LIB_SRC = path.resolve(LIB_PATH, '_')
const SRC = path.resolve(WORKSPACE_PATH, 'src')

const fsOptions = { encoding: 'utf8' }

const writeFile = (filePath, fileContent) => {
  fs.ensureFileSync(filePath)
  fs.writeFileSync(filePath, fileContent, fsOptions)
}

const getEntryDTSExportDeclaration = componentName => {
  const componentDisplayName = _.upperFirst(_.camelCase(componentName))
  return `export { default as ${componentDisplayName} } from './${componentName}'`
}

const createComponentModule = componentName => {
  const jsFilePath = path.resolve(LIB_PATH, componentName, INDEX_FILE)
  const jsFileContent = utils.getCommonJSReExport(
    `../_/components/${componentName}`
  ).join('\n')
  console.log(`    (${chalk.green.bold('.js')}): ${chalk.cyan(jsFilePath)}`)
  writeFile(jsFilePath, jsFileContent)

  const sassFilePath = path.resolve(LIB_PATH, componentName, INDEX_SCSS_FILE)
  const sassFileContent = `@import "../_/components/${componentName}/index.scss";\n`
  console.log(`    (${chalk.green.bold('.scss')}): ${chalk.cyan(sassFilePath)}`)
  writeFile(sassFilePath, sassFileContent)

  const dtsFilePath = path.resolve(DTS_PATH, componentName, INDEX_DTS_FILE)
  const dtsFileContent = [
    `export { default } from '@alifd/next/types/${componentName}'`,
    `export * from '@alifd/next/types/${componentName}'`,
  ].join('\n')
  console.log(`    (${chalk.green.bold('.d.ts')}): ${chalk.cyan(dtsFilePath)}`)
  writeFile(dtsFilePath, dtsFileContent)
}

const generateVersionExportDeclaration = () => {
  let pkg = {}

  try {
    pkg = fs.readJSONSync(path.resolve(WORKSPACE_PATH, 'package.json'))
  } catch (err) {
    console.error(chalk.red.bold(err.message))
    console.error(chalk.red.bold(err.stack))
  }
  return `module.exports['__VERSION__'] = '${pkg.version}';`
}

const createEntry = componentNames => {
  const entrySourceCodeLines = utils.getCommonJSReExport('./_/index.js')
  const sassEntrySourceCodeLines = [`@import "./_/index.scss";`]
  const dtsEntrySourceCodeLines = []

  console.log('🧱  Create refer files')

  componentNames.forEach(componentName => {
    createComponentModule(componentName)

    dtsEntrySourceCodeLines.push(getEntryDTSExportDeclaration(componentName))
  })

  console.log('🏰  Create entry files')

  entrySourceCodeLines.push(generateVersionExportDeclaration())

  const filePath = path.resolve(LIB_PATH, INDEX_FILE)
  console.log(`    (${chalk.green.bold('.js')}): ${chalk.cyan(filePath)}`)
  writeFile(filePath, entrySourceCodeLines.join('\n'))

  const sassFilePath = path.resolve(LIB_PATH, INDEX_SCSS_FILE)
  console.log(`    (${chalk.green.bold('.scss')}): ${chalk.cyan(sassFilePath)}`)
  writeFile(sassFilePath, sassEntrySourceCodeLines.join('\n'))

  const dtsFilePath = path.resolve(DTS_PATH, INDEX_DTS_FILE)
  console.log(`    (${chalk.green.bold('.d.ts')}): ${chalk.cyan(dtsFilePath)}`)
  writeFile(dtsFilePath, dtsEntrySourceCodeLines.join('\n'))
}

const copySassFiles = async () => {
  console.log('🚛  Copy sass files')

  const originSassFiles = await readDir(SRC, [
    function ignore(file, stats) {
      if (stats.isDirectory() && path.basename(file) === 'demo') {
        return true
      }

      if (!stats.isDirectory() && !/\.s(a|c)ss$/.test(file)) {
        return true
      }

      return false
    },
  ])

  originSassFiles.forEach(sassFile => {
    const targetSassFile = sassFile.replace(SRC, LIB_SRC)
    fs.copySync(sassFile, targetSassFile, {
      encoding: 'utf8',
    })
  })
}

const make = async () => {
  console.log(chalk.yellow.bold('Makefile...')) // eslint-disable-line no-console

  await copySassFiles()

  const exactComponentNames = utils.getComponentNames()

  createEntry(exactComponentNames)
}

make()

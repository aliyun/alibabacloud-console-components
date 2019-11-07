const { basename, extname } = require('path')

const config = {
  baseDir: './src/demo',
  afterMerge: (mergedProjectFiles, entryPath) => {
    const entryFileName = basename(entryPath, extname(entryPath))
    mergedProjectFiles['src/index.tsx'] = mergedProjectFiles[
      'src/index.tsx'
    ].replace('{{DEMO_ENTRY_NAME}}', entryFileName)
  },
  // extendsTemplate: '/some/other/template'
}

module.exports = config

const { basename, extname } = require('path')

const config = {
  baseDir: './src/demo',
  afterMerge: (mergedProjectFiles, entryPath) => {
    const entryFileName = basename(entryPath, extname(entryPath))
    mergedProjectFiles['src/index.jsx'] = mergedProjectFiles[
      'src/index.jsx'
    ].replace('{{DEMO_ENTRY_NAME}}', entryFileName)
  },
}

module.exports = config

const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
const _ = require('lodash')

glob(
  'src/components/**/*.md',
  { cwd: path.resolve(__dirname, '../') },
  (er, files) => {
    files.forEach(filePath => {
      const actualFilePath = path.resolve(__dirname, '../', filePath)
      const content = fs.readFileSync(actualFilePath, 'utf-8')
      const firstLine = content.split('\n')[0]
      const match = firstLine.match(/^# (\w+) ([^ \n]+)$/)
      if (!match) throw new Error(`unexpected line in ${actualFilePath}`)
      const frontMatter = `---
name: ${_.kebabCase(match[1])}
zhName: ${match[2]}
---`
      const newContent = `${frontMatter}\n\n${content}`
      fs.writeFileSync(actualFilePath, newContent)
    })
  }
)

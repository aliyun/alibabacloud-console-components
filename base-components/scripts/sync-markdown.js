const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const assert = require('assert')
const prettier = require('prettier')

// 运行这个脚本之前，把这个参数改成本地fusion仓库的docs目录
const fusionDocs = '/Users/csr/workspace/next/docs'

const root = path.join(__dirname, '../')
const prettierConfig = fs.readJsonSync(path.join(root, '../.prettierrc'))

glob('*/index.md', { cwd: fusionDocs }, (err, res) => {
  if (err) throw err
  res.forEach((readmePath) => {
    const match = /^(.*?)\/index\.md/.exec(readmePath)
    const componentName = match[1]
    let content = fs.readFileSync(path.join(fusionDocs, readmePath), 'utf8')
    // 修复上游markdown的语法问题
    content = content.replace(/<br>/g, '<br/>')
    const title = content.match(/^#.*/)[0]
    // 将fusion文档开头的元数据定义去掉
    content = content.replace(/(?=^#)([\s\S]*?)---/, '')
    content = title + content
    const writePath = path.join(root, `src/${componentName}/index.md`)
    fs.ensureDirSync(path.dirname(writePath))
    fs.writeFileSync(writePath, content)
  })
})

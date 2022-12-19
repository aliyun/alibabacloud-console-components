const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const assert = require('assert')
const prettier = require('prettier')

// 运行这个脚本之前，把这个参数改成本地fusion仓库的docs目录
const fusionDocs = '/Users/csr/workspace/next/docs'

const root = path.join(__dirname, '../')
const prettierConfig = fs.readJsonSync(path.join(root, '../.prettierrc'))

const blocklist = [
  'pagination/demo/react-router.md',
  'config-provider/demo/components.md'
]

glob('*/demo/*.md', { cwd: fusionDocs }, (err, res) => {
  if (err) throw err
  res
    .filter((demoFile) => !blocklist.includes(demoFile))
    .forEach((demoFile) => {
      const match = /^(.*?)\/demo\/(.*)\.md/.exec(demoFile)
      const componentName = match[1]
      const demoFilePath = match[2]
      const content = fs.readFileSync(path.join(fusionDocs, demoFile), 'utf8')
      const contentLines = content.split('\n')
      // 获取demo标题
      const title = /^\s*# (.*)/.exec(content)[1]
      // 获取demo描述
      let description = contentLines.find((line) => {
        return line && !line.startsWith('#') && !line.startsWith('-')
      })
      // 这个demo没有描述
      if (description.startsWith(':::')) description = ''
      assert(title)
      // 提取demo的代码块内容
      const demo = /```\s*jsx([\s\S]*?)```/.exec(content)[1]
      assert(demo)
      // 解析ReactDOM.render(<JSX />, mountNode);语句
      const reactdom_render_regexp = /^ReactDOM\.render\(([\s\S]*),\s*mountNode\s*(?:,\s*)?\);?/m
      if (
        content.match(
          /^ReactDOM\.render\(([\s\S]*),\s*mountNode\s*(?:,\s*)?\);?/gm
        ).length !== 1
      ) {
        throw new Error(`unexpected demo: ${demoFile}
      has multiple ReactDOM.render`)
      }
      // 提取JSX
      const renderJSX = reactdom_render_regexp.exec(content)[1]
      assert(renderJSX)

      // 提取css
      const cssMatch = /```\s*css([\s\S]*?)```/.exec(content)
      const css = cssMatch ? cssMatch[1] : ''

      // 产生的demo不应该直接调用ReactDOM.render，而是export一个DemoComponent
      let generateCode = demo.replace(reactdom_render_regexp, '')
      generateCode = generateCode.replace(
        /from ['"]@alifd\/next['"]/,
        `from '@alicloudfe/components'`
      )
      generateCode = generateCode.replace(
        /from ['"]react-router['"]/,
        `from 'react-router-dom'`
      )
      generateCode += `export default function DemoComponent() {
      const content = (${renderJSX});
      return (<Style>{content}</Style>);
    }`
      generateCode += `const Style = styled.div\`${css}\`;`
      generateCode = `import styled from 'styled-components';\n` + generateCode

      if (
        !/import React/.test(generateCode) &&
        !/import * as React/.test(generateCode)
      )
        generateCode = `import * as React from 'react';\n` + generateCode

      if (componentName === 'grid' && demoFilePath === 'type') {
        generateCode = `import * as ReactDOM from 'react-dom';\n` + generateCode
      }

      generateCode = `
/**
 * @title ${title}
 * @description ${description}
 */

${generateCode}`

      generateCode = prettier.format(generateCode, {
        ...prettierConfig,
        parser: 'babel'
      })
      assert(!/@alifd\/next/.test(generateCode), generateCode)
      const writePath = path.join(
        root,
        `src/${componentName}/demo/${demoFilePath}.tsx`
      )
      fs.ensureDirSync(path.dirname(writePath))
      fs.writeFileSync(writePath, generateCode)
    })
})

// gatsby+mdx无法识别require的import方式
// 因此这个文件fork自：
// packages/component/docBuildTools/legacyImportDemoInstruction/remarkPlugin.ts
// 进行一些修改

import visit from 'unist-util-visit-parents'
import * as mdast from 'mdast'
import * as path from 'path'
import stringHash from 'string-hash'

export = legacyImportDemoInstruction

/**
 * 在基础组件的readme中，我们使用了以下特殊指令：
 * - `#include "demo/demo2.js"` 引入一个demo。
 * 旧的文档系统识别并执行这种指令。为了不必修改**48个**基础组件的文档，我们在新的文档系统也实现这种指令。
 */

function legacyImportDemoInstruction(options) {
  return (tree, file) => {
    tree.children.unshift({
      type: 'import',
      value: `import DemoRenderer__LegacyDemoInstructions from '@runtime/DemoRenderer'`,
    })
    visit(tree, 'paragraph', (node: mdast.Paragraph, ancestors) =>
      paragraphVistor(node, ancestors as mdast.Parent[], file)
    )
  }
}

function paragraphVistor(
  node: mdast.Paragraph,
  ancestors: mdast.Parent[],
  file
) {
  if (!(node.children.length === 1 && node.children[0].type === 'text')) return

  const text = node.children[0].value
  const demoPath = resolveText(text)
  if (!demoPath) return

  // parent should be the root node
  if (ancestors.length !== 1) {
    throw new Error(
      `remarkPlugin: Please use legacyImportDemoInstruction at root level of markdown!`
    )
  }

  const parent = ancestors[0]

  // insert mdx import and jsx
  // hash it to make identifer different: https://github.com/gatsbyjs/gatsby/issues/16799
  const identiferName = `legacyImportDemo_${stringHash(
    file.contents + demoPath
  )}`

  // remove instruction node and insert mdx import
  parent.children.splice(
    parent.children.indexOf(node),
    1,
    {
      type: 'import' as any,
      value: `import ${identiferName} from "${demoPath}?loadDemo"`,
    },
    {
      type: 'jsx' as any,
      value: `<DemoRenderer__LegacyDemoInstructions demoInfo={${identiferName}} />`,
    }
  )
}

// resolve something like: `#include "demo/demo1.js"`
function resolveText(text: string) {
  const prefix = '#include '
  if (!text.startsWith(prefix)) return null
  // something like: `"demo/demo1.js"`
  const pathWithQuote = text.substr(prefix.length)
  const quoteStart = pathWithQuote[0]
  const quoteEnd = pathWithQuote[pathWithQuote.length - 1]
  if (pathWithQuote.length <= 2) return null
  if (quoteStart !== quoteEnd) return null
  if (quoteStart !== "'" && quoteStart !== '"') return null
  const demoPath = pathWithQuote.substring(1, pathWithQuote.length - 1)
  return `./${path.normalize(demoPath)}`
}

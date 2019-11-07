import * as mdast from 'mdast'
import { loadCache } from '../fetchFusionDocFromGithub'
import {
  resolveFusionMarkdownURL,
  parseMarkdown,
  ASTNodesToString,
} from '../fetchFusionDocFromGithub/fetchFusionDoc'

/**
 * 在基础组件的readme中，我们使用了以下特殊指令：
 * - `[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/form/index.md)` 通过网络请求指定的fusion文档，将其API部分拷贝到当前文档。
 */

const handleLinkNode = async ({
  node,
  ancestors,
  instructionParam,
  linkURL,
  file,
}) => {
  if (ancestors.length < 2) {
    throw new Error(`remarkPlugin: unexpected ancestors length`)
  }

  const parent = ancestors[ancestors.length - 1]
  const root = ancestors[0]

  // parent should be a paragraph with only the link node
  if (ancestors.length !== 2 || parent.children.length !== 1) {
    throw new Error(
      `remarkPlugin: Please use link instruction "embedAPIFromFusion" at root level of markdown!
      linkText:${node.children[0].value}. linkURL:${linkURL}`
    )
  }

  const fusionAPIDocs = await loadCache()
  const { actualComponentName } = resolveFusionMarkdownURL({
    componentName: instructionParam,
    linkURL,
  })
  const fusionAPIDoc = fusionAPIDocs[actualComponentName]
  if (typeof fusionAPIDoc === 'string' && fusionAPIDoc.length > 0) {
    const fixed = fixUpstreamMarkdown(fusionAPIDoc)
    const nodes = parseMarkdown(fixed).children
    const nodesToInsert = replaceTableNode(nodes)
    // remove link node and insert new ones
    root.children.splice(root.children.indexOf(parent), 1, ...nodesToInsert)
  } else {
    throw new Error(
      `remarkPlugin: can't load fusion doc for component ${actualComponentName}`
    )
  }
}

export = {
  name: 'embedAPIFromFusion',
  handleLinkNode,
}

/**
 * 简单修复一下上游markdown的问题
 */
function fixUpstreamMarkdown(upstreamMarkdown: string) {
  return upstreamMarkdown.replace('<br>', '<br/>')
}

function replaceTableNode(nodes: mdast.Content[]) {
  return nodes.map(nodeFromFusion => {
    if (nodeFromFusion.type !== 'table') {
      return nodeFromFusion
    }
    const { tableData, properties } = extractTableData(nodeFromFusion)
    const TableInfo = JSON.stringify({ tableData, properties })
    return {
      type: 'jsx',
      value: `<Render_Table_From_Fusion data={${TableInfo}} />`,
    }
  })
}

/**
 * https://mdxjs.com/playground 可以看到mdast node的结构。
 * 
本函数要从以下表格的AST
| title1 | title2 | title3 |
| ---- | ---- | ---- |
| 1.1 | 1.2 | 1.3 |
| 2.1 | 2.2 | 2.3 |
提取出以下数据：
tableData:
[
  { title1: 1.1, title2: 1.2, title3: 1.3 },
  { title1: 2.1, title2: 2.2, title3: 2.3 },
]
properties: ['title1', 'title2', 'title3' ]
 */
function extractTableData(node: mdast.Table) {
  if (node.type !== 'table') {
    throw new Error(`expect a table node in extractTableData`)
  }
  const properties: string[] = []
  const tableData: { [k: string]: string }[] = []
  node.children.forEach((rowNode, rowIndex) => {
    const rowDataArr = getTextFromRowNode(rowNode)
    if (rowIndex === 0) {
      properties.push(...rowDataArr)
    } else {
      const rowDataObj: { [k: string]: string } = {}
      rowDataArr.forEach((cellText, cellIndex) => {
        const property = properties[cellIndex]
        if (property) {
          rowDataObj[property] = cellText
        } else {
          // console.warn(
          //   `not property name for table cell. Table AST: ${JSON.stringify(
          //     node
          //   )}`
          // )
        }
      })
      tableData.push(rowDataObj)
    }
  })
  return { tableData, properties }
}

/**
 * 获取表格中一行的值，返回['col1', 'col2', 'col3']
 */
function getTextFromRowNode(rowNode: mdast.TableRow): string[] {
  if (rowNode.type !== 'tableRow') {
    throw new Error(
      `rowNode.type should be 'tableRow', but got ${rowNode.type}`
    )
  }
  return rowNode.children.map(cellNode => {
    if (cellNode.type !== 'tableCell')
      throw new Error(
        `cellNode.type should be 'tableCell', but got ${cellNode.type}`
      )
    // 将table cell的children作为一个段落，渲染成markdown
    const dummyParagraph: mdast.Paragraph = {
      type: 'paragraph',
      children: cellNode.children,
    }
    const cellText = ASTNodesToString([dummyParagraph]).trim()
    return cellText
  })
}

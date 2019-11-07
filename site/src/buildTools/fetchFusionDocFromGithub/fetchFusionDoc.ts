import * as mdast from 'mdast'
import { request } from 'urllib'
import unified from 'unified'
import remarkParse from 'remark-parse'
import assertMdAST from 'mdast-util-assert'
import removePosition from 'unist-util-remove-position'
import remarkFrontmatter from 'remark-frontmatter'
import remarkStringify from 'remark-stringify'

/**
 * @description
 * 在markdown中可以通过以下几种方式来指定要从哪里读取fusion组件的README：
 * 1. `[MDXInstruction:embedAPIFromFusion:componentName](这里的url地址不产生影响)`
 * 2. `[MDXInstruction:embedAPIFromFusion](https://raw.githubusercontent.com/alibaba-fusion/next/master/docs/${componentName}/index.md)`
 * 3. `[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/${componentName}/index.md)`
 *
 * 产生的请求url地址是：`https://raw.githubusercontent.com/alibaba-fusion/next/master/docs/${componentName}/index.md`
 *
 * 从markdown源码可读性的角度来考虑，推荐第3种
 */
export function resolveFusionMarkdownURL({
  componentName,
  linkURL,
}: {
  componentName?: string
  linkURL?: string
}) {
  let actualComponentName: string | undefined
  if (componentName) {
    actualComponentName = componentName
  }
  if (!actualComponentName) {
    const matchGithubRawContent =
      linkURL &&
      linkURL.match(
        /^https:\/\/raw.githubusercontent.com\/alibaba-fusion\/next\/master\/docs\/([^/]+)\/index.md$/
      )
    if (matchGithubRawContent) {
      actualComponentName = matchGithubRawContent[1]
    }
  }
  if (!actualComponentName) {
    const matchGithub =
      linkURL &&
      linkURL.match(
        /https:\/\/github.com\/alibaba-fusion\/next\/blob\/master\/docs\/([^/]+)\/index.md$/
      )
    if (matchGithub) {
      actualComponentName = matchGithub[1]
    }
  }

  if (!actualComponentName)
    throw new Error(`无法从markdown中的link指令解析出fusion组件名称`)

  return {
    actualComponentName,
    url: `https://raw.githubusercontent.com/alibaba-fusion/next/master/docs/${actualComponentName}/index.md`,
  }
}

export async function getAPIFromURL(markdownURL: string) {
  const result = await request(markdownURL)
  const content = result.data.toString()
  const ast = parseMarkdown(content)
  const APINodes = getAPINodes(ast)
  return ASTNodesToString(APINodes)
}

const stringifyPipeline = unified().use(remarkStringify)
export function ASTNodesToString(ASTNodes: mdast.Content[]) {
  const ast: mdast.Root = {
    type: 'root',
    children: [...ASTNodes],
  }
  assertMdAST(ast)
  return stringifyPipeline.stringify(ast)
}

const parsePipeline = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
export function parseMarkdown(str: string): mdast.Root {
  const ast = removePosition(parsePipeline.parse(str))
  assertMdAST(ast)
  return ast
}

function getAPINodes(ast: mdast.Root) {
  let startIndex = -1
  let endIndex = -1
  let APIheaderLevel = -1
  ast.children.forEach((node: mdast.Content, index: number) => {
    if (
      startIndex < 0 &&
      node.type === 'heading' &&
      node.children[0] &&
      node.children[0].type === 'text' &&
      /^APIs?$/i.test(node.children[0].value as string)
    ) {
      startIndex = index
      APIheaderLevel = node.depth
      return
    }
    if (startIndex < 0) return
    if (
      endIndex < 0 &&
      node.type === 'heading' &&
      node.depth <= APIheaderLevel
    ) {
      endIndex = index
    }
  })
  if (startIndex < 0) {
    throw new Error(`can't find API header!`)
  }
  if (endIndex < 0) {
    endIndex = ast.children.length
  }
  return ast.children.slice(startIndex + 1, endIndex)
}

import { loadCache } from '../fetchFusionDocFromGithub'
import {
  resolveFusionMarkdownURL,
  parseMarkdown,
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
    // remove link node and insert new ones
    root.children.splice(root.children.indexOf(parent), 1, ...nodes)
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

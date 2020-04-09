import search from 'mdast-util-toc/lib/search'
import mdastToString from 'mdast-util-to-string'

// Get a TOC representation of `node`.
function getHeadings(node) {
  var settings = {}
  var result = search(node, null, settings).map
  return result.map(heading => {
    const { depth, id } = heading
    return {
      depth,
      id,
      text: mdastToString(heading),
    }
  })
}

export = () => tree => {
  let result = getHeadings(tree)
  tree.children.push({
    type: 'export',
    value: `export const tocHeadings = ${JSON.stringify(result)}`,
  })
}

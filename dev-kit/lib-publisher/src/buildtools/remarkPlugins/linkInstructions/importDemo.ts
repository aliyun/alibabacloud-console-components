const handleLinkNode = ({
  node,
  ancestors,
  instructionParam,
  linkURL,
  file,
}) => {
  if (ancestors.length < 2) {
    throw new Error(`remarkPlugin: unexpected ancestors length`)
  }

  // remove link node
  const parent = ancestors[ancestors.length - 1]
  parent.children.splice(parent.children.indexOf(node), 1)

  // 静态import
  const importExpression = `require("${linkURL}?loadDemo")`

  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: 'jsx',
      value: `<DemoRenderer__LinkInstructions demoInfo={${importExpression}} />`,
    }
  )
}

export = {
  name: 'importDemo',
  handleLinkNode,
}

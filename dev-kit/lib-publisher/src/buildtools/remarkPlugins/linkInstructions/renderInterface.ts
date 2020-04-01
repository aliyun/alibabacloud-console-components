const handleLinkNode = ({ node, ancestors, instructionParam, file }) => {
  if (ancestors.length < 2) {
    throw new Error(`remarkPlugin: unexpected ancestors length`)
  }

  // remove link node
  const parent = ancestors[ancestors.length - 1]
  parent.children.splice(parent.children.indexOf(node), 1)

  const importApiJsonExpression = `require("@@tsApiJson")`
  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: 'jsx',
      value: `<InterfaceRenderer__LinkInstructions data={${importApiJsonExpression}} interfaceId="${instructionParam}" />`,
    }
  )
}

export = {
  name: 'renderInterface',
  handleLinkNode,
}

import { makeLegalIdentifier } from '@rollup/pluginutils'

const handleLinkNode = ({
  node,
  ancestors,
  instructionParam: interfaceName,
  ctx,
}) => {
  if (ancestors.length < 2) {
    throw new Error(`remarkPlugin: unexpected ancestors length`)
  }

  // remove link node
  const parent = ancestors[ancestors.length - 1]
  parent.children.splice(parent.children.indexOf(node), 1)

  const importIdentiferName = makeLegalIdentifier(
    `interface ${interfaceName}`
  ).replace(/_+/, '_')

  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: 'import',
      value: `import ${importIdentiferName} from "\0tsExtractData?extractInterfaceName=${interfaceName}"`,
    },
    {
      type: 'jsx',
      value: `<InterfaceRenderer__LinkInstructions data={${importIdentiferName}} />`,
    }
  )
}

export = {
  name: 'renderInterface',
  handleLinkNode,
}

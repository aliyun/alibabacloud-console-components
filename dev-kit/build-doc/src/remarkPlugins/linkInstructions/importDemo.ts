import { makeLegalIdentifier } from '@rollup/pluginutils'

const handleLinkNode = ({
  node,
  ancestors,
  instructionParam: demoName,
  linkURL,
  file,
}) => {
  if (ancestors.length < 2) {
    throw new Error(`remarkPlugin: unexpected ancestors length`)
  }
  // remove link node
  const parent = ancestors[ancestors.length - 1]
  parent.children.splice(parent.children.indexOf(node), 1)

  const importIdentiferName = makeLegalIdentifier(
    `${demoName} ${linkURL}`
  ).replace(/_+/, '_')

  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: 'import',
      value: `import * as ${importIdentiferName} from "${linkURL}?loadDemo"`,
    },
    {
      type: 'jsx',
      value: `<DemoRenderer2__LinkInstructions demoInfo={${importIdentiferName}} />`,
    }
  )
}

export = {
  name: 'importDemo',
  handleLinkNode,
}

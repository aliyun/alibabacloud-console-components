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

  const identiferName = `${instructionParam}`

  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: 'import',
      // 这里使用import *是因为demoloader会注入额外信息到模块中
      // 在demo里面用户还可以export demoMeta = {.....}
      value: `import * as ${identiferName} from "${linkURL}?loadDemo"`,
    },
    {
      type: 'jsx',
      value: `<DemoRenderer__LinkInstructions demoInfo={${identiferName}} />`,
    }
  )
}

const beforeVisitTree = tree => {
  tree.children.unshift({
    type: 'import',
    value: `import DemoRenderer__LinkInstructions from '@runtime/DemoRenderer'`,
  })
}

export = {
  name: 'importDemo',
  handleLinkNode,
  beforeVisitTree,
}

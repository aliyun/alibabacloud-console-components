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

  // 动态import
  //   const importExpression = `import("${linkURL}?loadDemo").catch(r => {
  //     if (typeof window === "undefined") return null;
  //     throw r;
  // })`
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

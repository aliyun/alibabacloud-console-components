import stringHash from 'string-hash'

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

  // insert mdx import and jsx
  // hash it to make identifer different: https://github.com/gatsbyjs/gatsby/issues/16799
  const identiferName = `${instructionParam}_${stringHash(file.contents)}`
  const infoIdentiferName = `${identiferName}_demoInfo`
  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: 'import',
      value: `import ${identiferName}, {_demoInfo as ${infoIdentiferName}} from "${linkURL}?loadDemoInfo"`,
    },
    {
      type: 'jsx',
      value: `<DemoRenderer__LinkInstructions DemoComponent={${identiferName}} demoInfo={${infoIdentiferName}} />`,
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

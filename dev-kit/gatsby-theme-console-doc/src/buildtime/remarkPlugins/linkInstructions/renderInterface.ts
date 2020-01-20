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
  const APIDataIdentiferName = `APIData_${stringHash(file.contents + linkURL)}`
  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: 'jsx',
      value: `<InterfaceRenderer__LinkInstructions data={${APIDataIdentiferName}} interfaceId="${instructionParam}" />`,
    }
  )

  const alreadyImportedAPIData =
    file.APIDataFiles || (file.APIDataFiles = new Map())
  if (!alreadyImportedAPIData.has(linkURL)) {
    alreadyImportedAPIData.set(linkURL, APIDataIdentiferName)
  }
}

const afterVisitTree = (tree, file) => {
  const alreadyImportedAPIData =
    file.APIDataFiles || (file.APIDataFiles = new Map())
  alreadyImportedAPIData.forEach((APIDataIdentiferName, linkURL) => {
    tree.children.unshift({
      type: 'import',
      value: `import ${APIDataIdentiferName} from '${linkURL}'`,
    })
  })
  tree.children.unshift({
    type: 'import',
    value: `import InterfaceRenderer__LinkInstructions from '@runtime/TypescriptMetadataRenderer/interface'`,
  })
}

export = {
  name: 'renderInterface',
  handleLinkNode,
  afterVisitTree,
}

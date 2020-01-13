const handleLinkNode = ({
  node,
  ancestors,
  instructionParam,
  file
}) => {
  if (ancestors.length < 2) {
    throw new Error(`remarkPlugin: unexpected ancestors length`);
  }

  // remove link node
  const parent = ancestors[ancestors.length - 1];
  parent.children.splice(parent.children.indexOf(node), 1);

  const APIDataIdentiferName = `APIJSON`;
  ancestors[0].children.splice(
    ancestors[0].children.indexOf(ancestors[1]) + 1,
    0,
    {
      type: "jsx",
      value: `<InterfaceRenderer__LinkInstructions data={${APIDataIdentiferName}} interfaceId="${instructionParam}" />`
    }
  );

  if (!file.APIJSON) {
    file.APIJSON = [APIDataIdentiferName, "@cc-dev-out/api-json/api.json"];
  }
};

const afterVisitTree = (tree, file) => {
  if (Array.isArray(file.APIJSON)) {
    const [APIDataIdentiferName, APIDataPath] = file.APIJSON;
    tree.children.unshift({
      type: "import",
      value: `import ${APIDataIdentiferName} from '${APIDataPath}'`
    });
  }

  tree.children.unshift({
    type: "import",
    value: `import InterfaceRenderer__LinkInstructions from '@runtime/TypescriptMetadataRenderer/interface'`
  });
};

export = {
  name: "renderInterface",
  handleLinkNode,
  afterVisitTree
};

function generateVarName(str: string) {
  let acc = "";
  for (const char of str) {
    if (!char.match(/[a-zA-z0-9]/)) {
      acc += "_";
    } else {
      acc += char;
    }
  }
  return acc;
}

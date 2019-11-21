import visit from 'unist-util-visit-parents'
import assertMdAST from 'mdast-util-assert'

/**
 * avoid transform have too many pass.
 * if pass count reach MAX_PASS_COUNT and is still unstable,
 * we throw error.
 */
const MAX_PASS_COUNT = 20

export = resolveLinkInstructions

function resolveLinkInstructions(options: {
  instructions: any[]
  recognizePrefix: string
}) {
  const { instructions, recognizePrefix = 'MDXInstruction' } = options
  const instructionHandlers = {}
  instructions.forEach(({ name, handleLinkNode }) => {
    if (instructionHandlers[name]) {
      throw new Error(`duplicate remark link instruction name: ${name}`)
    }
    instructionHandlers[name] = handleLinkNode
  })

  return async (tree, file) => {
    instructions.forEach(({ beforeVisitTree }) => {
      if (typeof beforeVisitTree === 'function') {
        beforeVisitTree(tree, file)
      }
    })

    let passCount = 0
    do {
      if (++passCount > MAX_PASS_COUNT) {
        throw new Error(`AST transformation takes too many passes!
        The transformation should be stable in ${MAX_PASS_COUNT} passes.
        Maybe some plugins is returning something **unconditionally**.
        Plugin should only return something(the tree) if they actually transform the tree.`)
      }

      // loop until we can't find any link instruction (which means stable)
      const found = await fineOneInstructionAndExectue(tree, file)
      // validate tree structure
      assertMdAST(tree)
      assertMdAST.parent(tree)
      if (!found) break // ast reach stable
    } while (true)

    instructions.forEach(({ afterVisitTree }) => {
      if (typeof afterVisitTree === 'function') {
        afterVisitTree(tree, file)
      }
    })
  }

  /**
   * return whether we found a link instruction and execute it
   */
  async function fineOneInstructionAndExectue(tree, file) {
    return new Promise(res => {
      let foundLinkInstruction = false
      visit(tree, 'link', (node, ancestors) => {
        const linkURL = node.url
        if (Array.isArray(node.children) && node.children.length === 1) {
          const linkTextNode = node.children[0]
          if (linkTextNode.type === 'text') {
            const inst = resolveLinkText(linkTextNode.value)
            if (inst) {
              foundLinkInstruction = true
              Promise.resolve(
                inst.instructionHandler({
                  node,
                  ancestors,
                  instructionParam: inst.instructionParam,
                  linkURL,
                  file,
                })
              ).then(() => res(true))
              // stop traversal because the instruction may change ast.
              // the ast may be **completly different** after this instruction's execution.
              // we will detect next instruction in the **next transform pass**.
              return visit.EXIT
            }
          }
        }
        return visit.CONTINUE
      })
      if (!foundLinkInstruction) res(false) // didn't find any instruction
    })
  }

  /**
   * resolve link text into link instruction
   */
  function resolveLinkText(text) {
    // a link instruction should be divided into 3 parts:
    // (recognizePrefix):(instructionName):(instructionParam)
    const parts = text.split(':')
    if (parts.length > 1 && parts[0] === recognizePrefix) {
      const instructionName = parts[1]
      // instructionParam is optional
      const instructionParam =
        text.slice(
          // skip this part: `(recognizePrefix):(instructionName):`
          parts[0].length + parts[1].length + 2
        ) || undefined
      const instructionHandler = instructionHandlers[instructionName]
      if (typeof instructionHandler === 'function') {
        return {
          instructionName,
          instructionHandler,
          instructionParam,
        }
      }
    }
    return null
  }
}

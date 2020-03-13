import visit from 'unist-util-visit-parents'

export = () => (tree, file) => {
  visit(tree, 'image', (node, ancestors) => {
    const alt = node.alt ? `alt="${node.alt}"` : ''
    const title = node.title ? `title="${node.title}"` : ''
    const src = (() => {
      if (typeof node.url !== 'string') return ''
      const url: string = node.url as any
      // 如果是相对路径（./img.png），就要使用webpack来查找对应图片
      if (url.startsWith('.')) return `src={require("${url}").default} `
      // 否则，将它当做普通的img url
      return `src="${url}"`
    })()
    const imgNode = {
      type: 'jsx',
      value: `<img ${alt} ${title} ${src} />`,
    }

    const parent: any = ancestors[ancestors.length - 1]
    parent.children.splice(parent.children.indexOf(node), 1, imgNode)
  })
}

import { ISiteMeta, IDocPageMeta } from '..'

export interface ITagIndex {
  [tagName: string]: {
    [tagVal: string]: IDocPageMeta[]
  }
}

export function buildTagIndex(categories: ISiteMeta['categories']) {
  const tagToDocs: ITagIndex = {}
  categories.forEach(({ docs }) => {
    docs.forEach(docMeta => {
      const { tags } = docMeta
      if (!tags) return
      Object.keys(tags).forEach(tagName => {
        const tagVal = String(tags[tagName])

        if (!tagToDocs[tagName]) {
          tagToDocs[tagName] = {}
        }
        if (!tagToDocs[tagName][tagVal]) {
          tagToDocs[tagName][tagVal] = []
        }
        tagToDocs[tagName][tagVal].push(docMeta)
      })
    })
  })
  return tagToDocs
}

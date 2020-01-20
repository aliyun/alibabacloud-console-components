import matter from 'gray-matter'
import stringifyObject from 'stringify-object'

// 加载标注在markdown文档文档中的元数据
module.exports = async function(this: any, src) {
  const callback = this.async()
  const { content, data } = matter(src)
  const code = `export const _frontMatter = ${stringifyObject(data)}

${content}`

  return callback(null, code)
}

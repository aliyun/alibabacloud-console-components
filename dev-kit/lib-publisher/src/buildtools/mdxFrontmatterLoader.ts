import matter from 'gray-matter'
import stringifyObject from 'stringify-object'

module.exports = async function(this: any, src) {
  const callback = this.async()
  const { content, data } = matter(src)
  const code = `export const frontMatter = ${stringifyObject(data)}

${content}`

  return callback(null, code)
}

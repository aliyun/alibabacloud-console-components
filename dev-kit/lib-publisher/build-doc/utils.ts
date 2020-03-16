export function getFrontmatter(mdxExport) {
  const {
    // 在markdown顶部通过yaml来定义的元数据
    _frontMatter: classicFrontmatter = {},
    // 使用mdx的export const frontmatter = {}来定义的元数据
    frontmatter: exportFrontmatter = {},
  } = mdxExport
  return {
    ...classicFrontmatter,
    ...exportFrontmatter,
  }
}

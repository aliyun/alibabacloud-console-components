import rehypeSlug from 'rehype-slug'
import linkInstructionsRemarkPlugin from '../remarkPlugins/linkInstructions/remarkPlugin'
import linkInstructionsImportDemo from '../remarkPlugins/linkInstructions/importDemo'
import linkInstructionsRenderInterface from '../remarkPlugins/linkInstructions/renderInterface'
import remarkPluginsAddHeadings from '../remarkPlugins/addHeadings'
import remarkPluginsTransformImg from '../remarkPlugins/transformImg'

export function getOpts({
  remarkPlugins = [],
  rehypePlugins = [],
  linkInstructions = [],
}) {
  return {
    remarkPlugins: [
      [
        linkInstructionsRemarkPlugin,
        {
          instructions: [
            linkInstructionsImportDemo,
            // require('./remarkPlugins/linkInstructions/lazyImportDemo'),
            linkInstructionsRenderInterface,
            ...linkInstructions,
          ],
        },
      ],
      remarkPluginsTransformImg,
      remarkPluginsAddHeadings,
      ...remarkPlugins,
    ],
    rehypePlugins: [rehypeSlug, ...rehypePlugins],
  }
}

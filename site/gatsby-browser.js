/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'

export const onClientEntry = () => {
  SyntaxHighlighter.registerLanguage('scss', scss)
}

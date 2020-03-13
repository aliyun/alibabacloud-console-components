import styled from 'styled-components'
import heading from './heading'
import code from './code'
import list from './list'
import table from './table'
import DemoRenderer__LinkInstructions from '../DemoRenderer'
import InterfaceRenderer__LinkInstructions from '../TypescriptMetadataRenderer/interface'

// 模仿github渲染markdown的样式
// 样式参考 https://github.com/sindresorhus/github-markdown-css/blob/gh-pages/github-markdown.css

const Paragraph = styled.p`
  margin-bottom: 10px;
  margin-top: 0;
`

const Blockquote = styled.blockquote`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 0;
  border-left: 0.25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`

const HR = styled.hr`
  box-sizing: content-box;
  background: transparent;
  border-bottom: 1px solid #dfe2e5;
  overflow: hidden;
  background-color: #e1e4e8;
  border: 0;
  height: 0.25em;
  margin: 24px 0;
  padding: 0;
  border-bottom-color: #eee;

  &:before {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`

const Image = styled.img`
  max-width: 100%;
`

export default {
  p: Paragraph,
  blockquote: Blockquote,
  thematicBreak: HR,
  img: Image,
  ...heading,
  ...code,
  ...list,
  ...table,
  // https://mdxjs.com/blog/shortcodes
  // 在mdx中可以无需import直接使用shortcodes组件
  DemoRenderer__LinkInstructions,
  InterfaceRenderer__LinkInstructions,
}

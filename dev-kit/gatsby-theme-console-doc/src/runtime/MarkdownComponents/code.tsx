import styled from 'styled-components'
import CodeBlock from '../CodeBlock'

export default {
  code: CodeBlock,
  inlineCode: styled.code`
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
      monospace;
    font-size: 1em;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    margin: 0;
    font-size: 85%;
    padding: 0.2em 0.4em;
    word-wrap: normal;
  `,
}

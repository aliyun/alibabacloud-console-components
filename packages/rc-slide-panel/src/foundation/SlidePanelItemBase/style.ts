import styled from 'styled-components'

/**
 * - Panels从左到右依次排列。
 * - 容器的宽度和高度都固定下来，不受子元素的影响。
 * - 宽度有渐变效果。
 */
export const SPanelItemWrapper = styled.div<{
  cursor: 'initial' | 'pointer'
  width: string
}>`
  float: left;
  position: relative;
  height: 100%;
  cursor: ${({ cursor }) => cursor};
  border-left: 1px solid #979797;

  width: ${({ width }) => width};
  transition: width 0.25s ease-out;
`

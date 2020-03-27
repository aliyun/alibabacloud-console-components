import styled from 'styled-components'

/**
 * looks like a link
 * @internal
 */
export const SLinkButton = styled.span<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${chooseValueByDisabled('#c1c1c1', '0070cc')};
  cursor: ${chooseValueByDisabled('not-allowed', 'pointer')};
  &:hover {
    text-decoration: ${chooseValueByDisabled('none', 'underline')};
  }
`

function chooseValueByDisabled(a: string, b: string) {
  return ({ disabled }: { disabled: boolean }) => (disabled ? a : b)
}

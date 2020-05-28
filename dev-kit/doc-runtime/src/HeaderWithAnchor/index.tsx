import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const Heading = styled.div`
  pointer-events: painted;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SAnchor = styled.a`
  margin-left: 12px;
  display: inline-block;
  width: 16px;
  height: 16px;
  ${Heading} & {
    visibility: hidden;
  }
  ${Heading}:hover & {
    visibility: visible;
  }
  svg {
    vertical-align: super;
    width: 16px;
    height: 16px;
  }
`

// from https://octicons.github.com/icon/link/
const LinkIcon = (props) => (
  <svg
    {...props}
    // viewBox="0 0 16 16"
    // width="16"
    // height="16"
    fill="currentcolor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    />
  </svg>
)

const HeaderWithAnchor: React.FC<{
  level?: 1 | 2 | 3 | 4 | 5 | 6
  id?: string
  className?: string
}> = ({ level = 3, children, id, className }) => {
  const anchor = id ? (
    <SAnchor href={`#${id}`}>
      <LinkIcon />
    </SAnchor>
  ) : null

  const props = {
    id,
    children: (
      <>
        {children}
        {anchor}
      </>
    ),
    className: classnames('header-with-anchor', className),
  }

  let result

  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      result = <Heading as={`h${level}` as any} {...props} />
      break
    default:
      throw new Error(`HeaderWithAnchor: unexpect header level: ${level}`)
  }
  return result
}

export default HeaderWithAnchor

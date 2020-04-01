import React from 'react'
import styled, { css } from 'styled-components'
import HeaderWithAnchor from '../HeaderWithAnchor'

function getHeading(level) {
  return ({ children, id, className }) => {
    return (
      <HeaderWithAnchor
        className={mergeClsName(className, 'cc-doc-toc')}
        level={level}
        id={id}
      >
        {children}
      </HeaderWithAnchor>
    )
  }
}

const shared = css`
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;
`

export default {
  h1: styled(getHeading(1))`
    ${shared}
    font-size: 2em;
    margin: 0.67em 0;
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
  `,
  h2: styled(getHeading(2))`
    ${shared}
    font-size: 1.5em;
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
  `,
  h3: styled(getHeading(3))`
    ${shared}
    font-size: 1.25em;
  `,
  h4: styled(getHeading(4))`
    ${shared}
    font-size: 1em;
  `,
  h5: styled(getHeading(5))`
    ${shared}
    font-size: .875em;
  `,
  h6: styled(getHeading(6))`
    ${shared}
    color: #6a737d;
    font-size: 0.85em;
  `,
}

function mergeClsName(...clsNames) {
  return clsNames.filter(Boolean).join(' ')
}

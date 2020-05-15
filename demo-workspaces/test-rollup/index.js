import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as mdxReact from '@mdx-js/react'
import * as amdLoader from '@alicloud/console-components-lib-documenter/lib/runtime/amdLoader'
import * as MdxWrapper from '@alicloud/console-components-lib-documenter/lib/runtime/MdxWrapper'

function getLoader() {
  const loader = amdLoader.createLoader()
  loader.register('react', React)
  loader.register('react-dom', ReactDOM)
  loader.register('@mdx-js/react', mdxReact)
  loader.register(
    '@alicloud/console-components-lib-documenter/lib/runtime/amdLoader',
    amdLoader
  )
  loader.register(
    '@alicloud/console-components-lib-documenter/lib/runtime/MdxWrapper',
    MdxWrapper
  )
  return loader
}

window.DocRuntime = {
  getLoader,
  React,
  ReactDOM,
  mdxReact,
  amdLoader,
  MdxWrapper,
}

import React from 'react'
import { ITheme } from 'vite-plugin-react-pages/client'
import { wrapMdxModule } from '@alicloud/console-components-doc-runtime'

const theme: ITheme = {
  initialLoading() {
    return <p>Loading...</p>
  },
  loaded(pageData) {
    const wrappedMdxModule = wrapMdxModule(pageData)
    const Comp = wrappedMdxModule.default
    return <Comp />
  },
  loadError() {
    return <p>LoadError</p>
  },
}

export default theme

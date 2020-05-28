import type { IDemoInfo } from '..'

const generateProjectFiles = (demoInfo: IDemoInfo) => {
  const { modules, entry } = prependDir(
    'demo',
    normalizePath({
      modules: Object.entries(demoInfo.demoSrcInfo.modules),
      entry: demoInfo.demoSrcInfo.entry,
    })
  )
  const demoFiles = modules.reduce((acc, [name, code]) => {
    acc[name] = code
    return acc
  }, {})

  const files = {
    'index.html': `
<html>
  <head>
    <title>Console Components Demo</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="app"></div>

    <script src="./index.tsx"></script>
  </body>
</html>
`,
    'index.tsx': `
import * as React from 'react'
import { render } from 'react-dom'
import App from './${entry}'

const rootElement = document.getElementById('app')
render(<App />, rootElement)
`,
    'package.json': JSON.stringify(
      {
        name: demoInfo.demoMeta?.zhName ?? 'demo',
        version: '1.0.0',
        description: demoInfo.demoMeta?.zhDesc ?? '',
        main: 'index.html',
        scripts: {
          start: 'parcel index.html --open',
          build: 'parcel build index.html',
        },
        dependencies: {
          'react-dom': '^16.0.0',
          react: '^16.0.0',
          ...demoInfo.demoSrcInfo.externals,
        },
        devDependencies: {
          'parcel-bundler': '^1.6.1',
        },
      },
      null,
      2
    ),
    ...demoFiles,
  }

  return {
    files,
    entry,
  }
}

export default generateProjectFiles

/**
 * 把以下路径：
 * 'index.js': 'index.js code...',
 * '../../util.js': 'util.js code...', (这个路径以"../"开头, 越界了)
 *
 * 转换成
 * 'nested/nested/index.js': 'index.js code...',
 * 'util.js': 'util.js code...',
 *
 * 注意模块之间的相对路径没有变
 */
function normalizePath({
  modules,
  entry,
}: {
  modules: [string, string][]
  entry: string
}) {
  const maxLevel = modules.reduce((_maxLevel, [path]) => {
    // 计算path前面有多少层"../"
    let p = path
    let level = 0
    while (p.startsWith('../')) {
      level++
      p = p.slice('../'.length)
    }
    return Math.max(_maxLevel, level)
  }, 0)

  const prependPath = 'nested/'.repeat(maxLevel)

  const normalizedModules = modules.map(
    ([path, code]) => [relative(prependPath, path), code] as [string, string]
  )
  const normalizedEntry = relative(prependPath, entry)
  return { modules: normalizedModules, entry: normalizedEntry }
}

function prependDir(
  prepend,
  {
    modules,
    entry,
  }: {
    modules: [string, string][]
    entry: string
  }
) {
  const resultModules = modules.map(([path, code]) => [
    relative(prepend, path),
    code,
  ])
  const resultEntry = relative(prepend, entry)
  return { modules: resultModules, entry: resultEntry }
}

function relative(baseDir: string, path: string) {
  const stack = baseDir.split('/').filter(Boolean)
  const parts = path.split('/')
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === '.') continue
    if (parts[i] === '..') stack.pop()
    else stack.push(parts[i])
  }
  return stack.join('/')
}

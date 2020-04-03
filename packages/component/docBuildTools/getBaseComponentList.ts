import * as path from 'path'
import glob from 'glob'

const basePath = path.resolve(__dirname, '../')

export function getBaseComponentList() {
  const filePaths = glob.sync('src/components/*/README.md', {
    cwd: basePath,
  })
  const components = filePaths.map((filePath) => ({
    // filePath类似于 src/components/card/README.md
    name: filePath.split('/')[2],
    path: path.resolve(basePath, filePath),
  }))
  return components
}

import * as path from 'path'
import * as util from 'util'
import glob from 'glob'

const asyncGlob = util.promisify(glob)
const basePath = path.resolve(__dirname, '../../../packages/component')

export async function getBaseComponentList() {
  const filePaths = await asyncGlob('src/components/*/README.md', {
    cwd: basePath,
  })
  const componentNames = filePaths.map(filePath => filePath.split('/')[2])
  return componentNames
}

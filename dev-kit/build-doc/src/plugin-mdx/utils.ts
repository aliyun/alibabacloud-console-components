import * as fs from 'fs-extra'
import * as path from 'path'
import invariant from 'tiny-invariant'

export function resolveApiJson(from: string) {
  const dir = path.resolve(path.dirname(from), 'cc-dev-out/api-extractor')
  invariant(fs.existsSync(dir))
  const files = fs.readdirSync(dir)
  invariant(files.length === 1)
  const file = path.resolve(dir, files[0])
  return file
}

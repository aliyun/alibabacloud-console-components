import { dataToEsm } from '@rollup/pluginutils'
import { Plugin } from 'rollup'
import invariant from 'tiny-invariant'
import queryString from 'query-string'
import * as fs from 'fs-extra'
import * as path from 'path'
import findUp from 'find-up'

import { extractTsInterfaceData } from './utils'

export function extractTsInterfaceDataPlugin(): Plugin {
  return {
    name: 'extractTsInterfaceDataPlugin',
    async resolveId(source, importer) {
      if (source.startsWith('\0tsExtractData')) {
        invariant(importer, `"${source}" should have a importer.`)
        const query = source.substr('\0tsExtractData'.length)
        const apiJsonPath = await resolveApiJson(importer)
        return `${apiJsonPath}${query}`
      }
    },
    load(id) {
      const request = queryString.parseUrl(id)
      if ('extractInterfaceName' in request.query) {
        const apiJsonPath = request.url
        const { extractInterfaceName } = request.query
        invariant(typeof extractInterfaceName === 'string')

        const data = extractTsInterfaceData(apiJsonPath, extractInterfaceName)
        const code = dataToEsm(data)
        return code
      }
    },
  }
}

async function resolveApiJson(from: string) {
  const outDir = await findUp('cc-dev-out', { cwd: from, type: 'directory' })
  invariant(outDir)
  const dir = `${outDir}/api-extractor`
  invariant(fs.existsSync(dir))
  const files = fs.readdirSync(dir)
  invariant(files.length === 1)
  const file = path.resolve(dir, files[0])
  return file
}

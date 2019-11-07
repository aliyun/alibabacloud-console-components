import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'
import { resolveFusionMarkdownURL, getAPIFromURL } from './fetchFusionDoc'
import { getBaseComponentList } from '../getBaseComponentList'

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)
const CACHE_PATH = path.resolve(__dirname, '../../../.fusionDocCache.json')

let updatingCache

export async function loadCache() {
  try {
    const str = await readFileAsync(CACHE_PATH, 'utf8')
    return JSON.parse(str)
  } catch (error) {
    if (error.code === 'ENOENT') {
      if (!updatingCache) {
        console.log(`Can't find cache for fusion docs locally.
        Now fetch fusion docs from github...`)
        updatingCache = updateAllCache()
      }
      return await updatingCache
    }
    throw error
  }
}

async function writeCache(cache) {
  return writeFileAsync(CACHE_PATH, JSON.stringify(cache), 'utf8')
}

async function updateCache(cache, componentName) {
  const { actualComponentName, url } = resolveFusionMarkdownURL({
    componentName,
    linkURL: '',
  })
  cache[actualComponentName] = await getAPIFromURL(url)
}

export async function updateAllCache() {
  const cache = {}
  const baseComponents = await getBaseComponentList()
  let successCount = 0,
    totalCount = 0
  console.log(
    `Start fetching fusion doc from github. Doc count: ${baseComponents.length}`
  )
  for (const componentName of baseComponents) {
    try {
      await updateCache(cache, componentName)
      console.log(
        `[${totalCount}/${baseComponents.length}] success: ${componentName}`
      )
      successCount++
    } catch (error) {
      console.error(
        `[${totalCount}/${baseComponents.length}] error: ${componentName}`,
        error
      )
    }
    totalCount++
  }
  console.log(`Done! Success count: ${successCount}/${baseComponents.length}`)
  await writeCache(cache)
  return cache
}

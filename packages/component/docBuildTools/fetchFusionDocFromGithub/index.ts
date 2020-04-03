import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'
import { resolveFusionMarkdownURL, getAPIFromURL } from './fetchFusionDoc'
import { getBaseComponentList } from '../getBaseComponentList'

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)
const CACHE_PATH = path.resolve(
  __dirname,
  '../../doc-data/.fusionDocCache.json'
)

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
      return updatingCache
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
  const baseComponents = getBaseComponentList().map(({ name }) => name)

  const cache = await baseComponents.reduce(
    async (statePromise, componentName, curIndex) => {
      const state = await statePromise
      try {
        await updateCache(state, componentName)
        console.log(
          `[${curIndex + 1}/${baseComponents.length}] success: ${componentName}`
        )
        return state
      } catch (error) {
        // log and re-throw
        console.error(
          `[${curIndex + 1}/${baseComponents.length}] error: ${componentName}`,
          error
        )
        throw error
      }
    },
    {} as any
  )
  await writeCache(cache)
  return cache
}

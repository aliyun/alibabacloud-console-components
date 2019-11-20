import {
  getSecToken,
  getUmid,
  getCollina,
  getActiveRegionId,
} from '../../utils'

// 默认请求路径
const BASE_URL = '/'
// One-console 各类接口 url 映射表
const API_URL = {
  open: [
    'data/api.json',
    'data/multiApi.json'
  ],
  inner: [
    'data/innerApi.json',
    'data/multiInnerApi.json'
  ],
  app: [
    'data/call.json',
    'data/multiCall.json'
  ]
}

/**
 * Axios intercetor
 * One-console request pre-processor
 * @param {*} config 
 */
function consoleRequestInterceptor(config) {
  // 如果传入了 url，且不在我们检查的 url 范围内，提前返回不作处理
  if (!isValidURL(config.url, config.apiType)) {
    return config
  }
  // 单或多接口调用
  const multi = isMulti(config.data)
  // 检查参数格式是否正确
  checkArguments(config.data, multi)
  // 补全缺省必填参数并修正参数格式
  // params 与 actions 需要 JSON.stringify
  const nextData = processData(config.data, [
    'sec_token',
    'collina',
    'umid',
    'region'
  ])

  // 返回新的 config 对象
  return {
    ...config,
    method: 'post', // 请求方法强制置为 'post'
    url: getURL(config.apiType, multi), // 获取请求 URL
    baseURL: BASE_URL,
    withCredentials: config.useCors ? true : false,
    data: nextData,
    requestStartTime: Date.now(),
  }
}

// 检查是否是合法的 url
function isValidURL(url, apiType = 'open') {
  const urls = API_URL[apiType]
  if (url && !urls.includes(url)) {
    return false
  }
  return true
}

// 解析请求的 api 类型
function isMulti(data) {
  // 如果参数中存在 actions 则判定为 multi 请求
  if (typeof data.actions !== 'undefined') {
    return true
  }
  return false
}

// fecs 暂时不支持 url 后面跟 "?action" 标示，暂时去掉，如果后面支持再加回来
function getURL(apiType = 'open', multi) {
  const urls = API_URL[apiType]
  // 添加一个 url 参数方便调试
  return `${multi ? urls[1] : urls[0]}`
}

// 获取 region 用于后端区分调用的 endpoint
function getRegion(data) {
  const multi = isMulti(data)
  if (!multi) {
    const params = data.params || {}
    const RegionId = params.RegionId
    if (RegionId) {
      return RegionId
    }
  } else {
    const { actions } = data
    for(const action of actions) {
      const params = action.params || {}
      const RegionId = params.RegionId
      if (RegionId) {
        return RegionId
      }
    }
  }
  return getActiveRegionId()
}

// 必填缺省参数补全并格式化部分参数
const utilsMap = {
  sec_token: getSecToken,
  collina: getCollina,
  umid: getUmid,
  region: getRegion
}
function processData(data, keys = []) {
  const nextData = { ...data }
  keys.forEach(key => {
    if (typeof nextData[key] === 'undefined') {
      // 只有 getRegion 需要参数
      // 其它方法会忽略参数 data
      nextData[key] = utilsMap[key] && utilsMap[key](data)
    }
  })
  // stringify `params` 与 `actions`
  if (nextData.params) {
    nextData.params = JSON.stringify(nextData.params)
  }
  if (nextData.actions) {
    nextData.actions = JSON.stringify(nextData.actions)
  }
  return nextData
}

// 检查参数
function checkArguments(data, multi) {
  if (multi) {
    checkArgumentsForMultiApi(data)
  } else {
    checkArgumentsForApi(data)
  }
}

// 检查单接口入参
function checkArgumentsForApi({ product, action }) {
  if (!product) {
    throw new Error(
      'You must specify which product\'s api you want to call'
    )
  }
  if (!action) {
    throw new Error('You must specify which api you want to call')
  }
}

// 检查多接口入参
function checkArgumentsForMultiApi({ product, actions }) {
  if (!product) {
    throw new Error(
      'You must specify which product\'s api you want to call'
    )
  }
  if (!Array.isArray(actions)) {
    throw new TypeError('Actions must be an array')
  }
  // loop through to check every action
  actions.forEach(({ action }) => {
    if (!action) {
      throw new Error(
        `You must specify which api you want to call.
        If you see this log, it's likely that you've forgot to specify an action
        property in your actions argument. Go for a double check.`
      )
    }
  })
}

export default consoleRequestInterceptor
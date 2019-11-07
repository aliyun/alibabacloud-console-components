const PROD = 'production'
const DEV = 'development'
const TEST = 'test'

exports.PROD = PROD
exports.DEV = DEV
exports.TEST = TEST

const isEnvOf = type => process.env.NODE_ENV === type

exports.isEnvOf = isEnvOf
exports.isProduction = () => isEnvOf(PROD)
exports.isDevelopment = () => isEnvOf(DEV)
exports.isTest = () => isEnvOf(TEST)

exports.getCompileOption = (specKey) => {
  const strValue = process.env.COMPILE_OPTION

  if (!strValue) {
    return
  }

  const splittedValue = strValue.split(',')
  const result = splittedValue.reduce((res, kv) => {
    const [key, value = true] = kv.split(':')
    if (key) {
      return Object.assign(res, { [key]: value })
    }
    return res
  }, {})

  // eslint-disable-next-line consistent-return
  return specKey ? result[specKey] : result
}

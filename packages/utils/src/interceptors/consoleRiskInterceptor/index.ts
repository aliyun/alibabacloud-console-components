import handleDoubleConfirm from './handleDoubleConfirm'

async function consoleRiskInterceptor(response) {
  const { data: responseData } = response
  const { config: { risk } } = response
  if (!risk) return response
  const { code } = risk
  switch (responseData.code) {
  case code.doubleConfirm:
    try {
      const newResponse = await handleDoubleConfirm(response)
      return newResponse
    } catch (e) {
      console.error('[handleDoubleConfirm] failed: ', e.message)
      return response
    }
  case code.forbidden:
    return response
  default:
    return response
  }
}

export default consoleRiskInterceptor
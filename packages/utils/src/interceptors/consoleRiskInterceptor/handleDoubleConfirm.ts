import axios from 'axios'
import { URLSearchParams } from '../searchParamsInterceptor'
import getVerifyInformation from './getVerifyInformation'
import {
  guideToVerificationMethodSetting,
  guideToVerificationDetailSetting,
} from './helpers'

const axiosInstance = axios.create()

function isVerifyCodeValid(res, code) {
  if (res && res.data && res.data.code === code.verifyCodeInvalid) {
    return false
  }
  return true
}

/* eslint-disable no-console */
async function handleDoubleConfirm(response) {
  const { config: { risk } } = response
  const { code } = risk
  const { data: responseData } = response
  const { data: riskData } = responseData
  const { verifyType, verifyDetail, codeType } = riskData

  if (!verifyType) {
    guideToVerificationMethodSetting(verifyType, risk)
    return response
  }

  if (!verifyDetail && (verifyType === 'sms' || verifyType === 'email')) {
    guideToVerificationDetailSetting(verifyType, risk)
    return response
  }

  let newResponse = null
  let lastRequestId
  /* eslint-disable no-await-in-loop */
  while (
    newResponse === null || 
    !isVerifyCodeValid(newResponse, code)
  ) {
    let requestId
    let verifyCode

    const options = {
      isVerifyCodeValid: isVerifyCodeValid(newResponse, code),
      verifyType,
      verifyDetail,
      codeType,
      lastRequestId,
      risk,
    }
    try {
      const { reqId, vCode } = await getVerifyInformation(options)
      requestId = reqId
      verifyCode = vCode
      lastRequestId = requestId
    } catch (e) {
      console.error('[getVerifyInformation] failed: ', e.message)
      return response
    }

    try {
      const { config: { data: reqDataString, url: reqUrl } } = response
      const reqData = new URLSearchParams(reqDataString)
      reqData.append('verifyType', verifyType)
      verifyCode && reqData.append('verifyCode', verifyCode)
      requestId && reqData.append('requestId', requestId)

      newResponse = await axiosInstance({
        method: 'post',
        url: reqUrl,
        data: reqData,
      })
    } catch (e) {
      console.error('[verify Request] failed: ', e.message)
      return response
    }
  }

  return newResponse
}

export default handleDoubleConfirm
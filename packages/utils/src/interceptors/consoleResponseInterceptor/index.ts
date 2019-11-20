interface IError {
  stack?: string;
  response?: any;
  message?: any;
}

function consoleResponseInterceptor(response) {
  const { data: apiResponseData } = response
  const { config: { ignoreError } } = response
  if (
    // Single api succeeded -> code 200, withFailedRequest undefined
    // Multi api succeeded  -> code 200, withFailedRequest false
    apiResponseData.code === '200' &&
    apiResponseData.withFailedRequest !== true
  ) {
    return apiResponseData.data
  } else if (
    // Multi api with failed request
    apiResponseData.code === '200' &&
    apiResponseData.withFailedRequest === true
  ) {
    const error: IError = new Error('Multi OpenAPI calls with failed request.')
    error.response = response
    if (!ignoreError) {
      throw error
    }
    return apiResponseData
  } else if (apiResponseData.message) {
    // Single api failed with an error message
    const error: IError = new Error(apiResponseData.message)
    error.response = response
    if (!ignoreError) {
      throw error
    }
    return apiResponseData
  } else {
    // Single api failed without an error message
    const error: IError = new Error('OpenAPI failed without a message.')
    error.response = response
    if (!ignoreError) {
      throw error
    }
    return apiResponseData
  }
}

export default consoleResponseInterceptor
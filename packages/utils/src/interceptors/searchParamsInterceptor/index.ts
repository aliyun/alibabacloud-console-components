import URLSearchParams from 'url-search-params'
import forIn from 'lodash.forin'

export {
  URLSearchParams
}

// This is an axios request interceptor
// By using this interceptor, user can transform normal JavaScript data object
// into an URLSearchParams instance
function searchParamsInterceptor(config) {
  // Take out the request params
  const { params, data } = config

  function transform(target) {
    const searchParams = new URLSearchParams()
    // Iterate over request data and append them to searchParams
    forIn(target, (value, key) => {
      // Ignore keys which's value is undefined
      if (typeof value !== 'undefined') {
        searchParams.append(key, value)
      }
    })
    return searchParams
  }

  const paramsSearchParams = transform(params)
  const dataSearchParams = transform(data)
  
  // Return the new config
  return {
    ...config,
    params: paramsSearchParams,
    data: dataSearchParams
  }
}

export default searchParamsInterceptor
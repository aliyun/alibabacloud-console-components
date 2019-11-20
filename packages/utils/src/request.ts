import axios from 'axios'
import consoleRequestInterceptor from './interceptors/consoleRequestInterceptor'
import searchParamsInterceptor from './interceptors/searchParamsInterceptor'
import consoleRiskInterceptor from './interceptors/consoleRiskInterceptor'
import consoleResponseInterceptor from './interceptors/consoleResponseInterceptor'

const request = axios.create()

// Interceptors for request
request.interceptors.request.use(searchParamsInterceptor)
request.interceptors.request.use(consoleRequestInterceptor)

// Interceptors for response
request.interceptors.response.use(consoleRiskInterceptor)
request.interceptors.response.use(consoleResponseInterceptor)

export default request 
import 'systemjs/dist/system'
import 'systemjs/dist/extras/amd'
import './systemjs-amd-introp'

import '@alicloud/console-components/dist/wind.css'

import { loadExistModuleIntoImportMap } from './utils'
import externalsObj from './externalsObj'

let alreadyPrepareCommonDeps = false
export default function prepareCommonDeps() {
  if (!alreadyPrepareCommonDeps) {
    loadExistModuleIntoImportMap(externalsObj)
    alreadyPrepareCommonDeps = true
  }
}

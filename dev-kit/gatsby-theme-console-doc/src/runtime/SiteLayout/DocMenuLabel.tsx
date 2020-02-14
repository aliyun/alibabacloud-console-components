import _ from 'lodash'
import { IDocPageMeta } from '.'

const DocMenuLabel: React.FC<{
  docInfo: {
    labelInMenu?: string
    name?: string
    zhName?: string
  }
}> = ({ docInfo }) => {
  if (docInfo.labelInMenu) return docInfo.labelInMenu
  return `${capitalizeFirstLetter(_.camelCase(docInfo.name))} ${
    docInfo.zhName
  }` as any
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default DocMenuLabel

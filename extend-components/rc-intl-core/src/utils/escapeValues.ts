import mapValues from 'lodash/mapValues'
import escape from 'escape-html'

const escapeOnlyStringValue = (value: string) => {
  if (typeof value === 'string') {
    return escape(value)
  }

  return value
}

const escapeValues = (values: { [key: string]: string }) =>
  mapValues(values, escapeOnlyStringValue)

export default escapeValues

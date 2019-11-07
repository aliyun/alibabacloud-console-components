/* eslint-disable import/prefer-default-export */

import {
  camelCase,
  upperFirst,
} from 'lodash'
import { compose } from 'lodash/fp'

export const pascalCase = compose(
  upperFirst,
  camelCase
)

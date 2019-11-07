/* eslint-disable react/no-danger */
import React, { isValidElement, cloneElement, ReactElement } from 'react'
import warning from 'warning'
import get from 'lodash/get'
import isPlainObject from 'lodash/isPlainObject'
import isEmpty from 'lodash/isEmpty'
import mapValues from 'lodash/mapValues'

import VanillaIntl, {
  getExactOptionsForFormat as getExactOptionsForVanillaFormat,
} from './VanillaIntl'
import IntlBase from './IntlBase'
import {
  IFormatMessageOptionsReact,
  IFormatMessageContextReact,
  IFormatMessageOptions,
  IFormatMessageContext,
} from './types'

const createTokenGenerator = (uid: string) => {
  let i = 0
  return () => {
    i += 1
    return `${uid}_${i}`
  }
}

/* eslint-disable no-dupe-class-members */

/** @public */
class ReactIntl extends IntlBase {
  // To make things clear, we don't use optional parameter syntax here
  public formatMessage(key: string): string

  public formatMessage(
    options: IFormatMessageOptionsReact
  ): string | ReactElement

  public formatMessage(
    key: string,
    values: IFormatMessageContextReact
  ): string | ReactElement

  public formatMessage(
    options: IFormatMessageOptionsReact,
    preferString: false
  ): ReactElement

  public formatMessage(
    key: string,
    values: IFormatMessageContextReact,
    preferString: false
  ): ReactElement

  public formatMessage(
    key: string | IFormatMessageOptionsReact,
    values?: IFormatMessageContextReact | boolean,
    preferString?: boolean
  ): string | ReactElement {
    const {
      exactId,
      exactDefaultMessage,
      exactValues,
      exactPreferString,
    } = getExactOptionsForFormat(key, values, preferString)

    const uid = Math.floor(Math.random() * 0x10000000000).toString(16)
    const generateToken = createTokenGenerator(uid)
    const valuesMap: { [index: string]: ReactElement } = {}
    const tokenDelimiter = `_@@__#${uid}__@@_`

    let valuesForSuper: IFormatMessageContext
    if (isPlainObject(exactValues) && !isEmpty(exactValues)) {
      valuesForSuper = mapValues(exactValues, value => {
        if (isValidElement(value)) {
          const token = generateToken()
          // TODO: this random key break snapshot testing
          valuesMap[token] = cloneElement(value, { key: token })
          return `${tokenDelimiter}${token}${tokenDelimiter}`
        }

        return value
      }) as IFormatMessageContext
    } else {
      valuesForSuper = {}
    }

    const message: string = VanillaIntl.prototype.formatMessage.call(this, {
      id: exactId,
      defaultMessage: exactDefaultMessage,
      values: valuesForSuper,
    })
    const hasReactElementValue = !isEmpty(valuesMap)

    if (exactPreferString && !hasReactElementValue) {
      return message
    }

    let nodes: string | (string | ReactElement)[] = message
    if (hasReactElementValue) {
      nodes = message
        .split(tokenDelimiter)
        .map(part => get(valuesMap, part, part))
    }

    return <>{nodes}</>
  }

  public formatHTMLMessage(
    key: string,
    values?: IFormatMessageContext
  ): ReactElement

  public formatHTMLMessage(options: IFormatMessageOptions): ReactElement

  public formatHTMLMessage(
    key: string | IFormatMessageOptions,
    values?: IFormatMessageContext
  ): ReactElement {
    const {
      exactKey,
      exactDefaultMessage,
      exactValues,
    } = getExactOptionsForVanillaFormat(key, values)
    const message = VanillaIntl.prototype.formatHTMLMessage.call(this, {
      id: exactKey,
      defaultMessage: exactDefaultMessage,
      values: exactValues,
    })
    const html = { __html: message }
    return <span dangerouslySetInnerHTML={html} />
  }
}

export default ReactIntl

function getExactOptionsForFormat(
  key: string | IFormatMessageOptionsReact,
  values?: IFormatMessageContextReact | boolean,
  preferString?: boolean
) {
  let exactId: string
  let exactDefaultMessage: string | undefined
  let exactValues = isPlainObject(values)
    ? (values as IFormatMessageContextReact)
    : {}
  let exactPreferString: boolean

  if (isPlainObject(key)) {
    const {
      id,
      defaultMessage,
      values: vals,
    } = key as IFormatMessageOptionsReact
    exactId = id
    exactDefaultMessage = defaultMessage
    if (isPlainObject(vals)) {
      exactValues = vals as IFormatMessageContextReact
    }
  } else if (typeof key === 'string') {
    exactId = key
  } else {
    exactId = key.toString()
    warning(
      false,
      `[@ali/wind-intl] format key should be a string, but get ${Object.prototype.toString.call(
        key
      )}. will use "${exactId}" as format key`
    )
  }

  if (typeof values === 'boolean') {
    exactPreferString = values
  } else {
    exactPreferString = preferString !== false
  }
  return { exactId, exactDefaultMessage, exactValues, exactPreferString }
}

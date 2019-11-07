/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { NodeKind, IAPIData, IAPIDataProperty } from './types'
import APITable, { IAPITableRow } from '../APITable'

const InterfaceRenderer: React.FC<{ data: IAPIData; name: string }> = ({
  data,
  name,
}) => {
  const node = data[name]
  if (typeof node !== 'object') {
    throw new Error(
      `data entry not exist. data: ${JSON.stringify(
        data
      )}. expected to have key: ${name}.`
    )
  }
  if (node.kind !== NodeKind.Interface) {
    throw new Error(`wrong node.kind: ${node.kind}`)
  }

  const properties: IAPITableRow[] = node
    .properties!.map(({ name: pName }) => data[pName] as IAPIDataProperty)
    .map(
      ({
        excerpt: type,
        defaultValue,
        name: id,
        displayName,
        summary: description,
      }) => ({
        id,
        displayName,
        type,
        description,
        defaultValue,
      })
    )
  return <APITable rows={properties} />
}

export default InterfaceRenderer

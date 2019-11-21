/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { MetaKind, IAPIData, IMetaInterfaceProperty } from '../types'
import Table, { IInterfaceTableRow } from './table'

// api-documenter能够提取ts源码中的类型、注释信息
// 本组件渲染api-documenter提取的interface的数据
const InterfaceRenderer: React.FC<{ data: IAPIData; interfaceId: string }> = ({
  data,
  interfaceId,
}) => {
  const node = data[interfaceId]
  if (typeof node !== 'object') {
    throw new Error(
      `data entry not exist. data: ${JSON.stringify(
        data
      )}. expected to have key: ${interfaceId}.`
    )
  }
  if (node.kind !== MetaKind.Interface) {
    throw new Error(`wrong node.kind: ${node.kind}`)
  }
  const properties: IInterfaceTableRow[] = node
    .properties!.map(
      ({ name: propertyId }) => data[propertyId] as IMetaInterfaceProperty
    )
    .map(
      ({
        excerpt: type,
        defaultValue,
        name: propertyId,
        displayName,
        summary: description,
      }) => ({
        propertyId,
        displayName,
        type,
        description,
        defaultValue,
      })
    )
  return <Table properties={properties} />
}

export default InterfaceRenderer

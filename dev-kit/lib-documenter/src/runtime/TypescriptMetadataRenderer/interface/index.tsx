/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import type { IInterfaceData } from '@alicloud/console-components-build-doc'
import Table, { IInterfaceTableRow } from './table'

// api-documenter能够提取ts源码中的类型、注释信息
// 本组件渲染api-documenter提取的interface的数据
const InterfaceRenderer: React.FC<{
  data: IInterfaceData
}> = ({ data }) => {
  const properties: IInterfaceTableRow[] = Object.keys(data.properties)
    .map((propertyName) => ({
      name: propertyName,
      ...data.properties[propertyName],
    }))
    .sort((a, b) => {
      if (a.isRequired === b.isRequired) return 0
      if (a.isRequired) return -1
      return 1
    })
    .map(
      ({
        excerpt: type,
        defaultValue,
        name: propertyId,
        description,
        isRequired,
      }) => ({
        propertyId,
        displayName: propertyId,
        type,
        description,
        defaultValue: addIsRequiredNote(defaultValue, isRequired),
      })
    )
  return <Table properties={properties} />
}

export default InterfaceRenderer

function addIsRequiredNote(defaultValue: string, isRequired: boolean) {
  const note = isRequired
    ? '<span style="color:#D93026">**[必传参数]**</span><br />'
    : '**[可选参数]**'
  return `${note}<br />${defaultValue}`
}

import {
  ApiInterface,
  ApiItem,
  ApiItemKind,
  ApiModel,
  ApiPackage,
  ApiPropertySignature,
} from '@microsoft/api-extractor-model'
import { DocNode, StandardTags, StringBuilder } from '@microsoft/tsdoc'
import invariant from 'tiny-invariant'
import { CustomMarkdownEmitter } from './markdownEmitter'
// import { CustomMarkdownEmitter } from '@microsoft/api-documenter/lib/markdown/CustomMarkdownEmitter'

export function extractTsInterfaceData(
  apiJsonPath: string,
  extractInterfaceName: string
): IInterfaceData {
  const apiModel = new ApiModel()
  const apiPackage: ApiPackage = apiModel.loadPackage(apiJsonPath)
  const emitter = new CustomMarkdownEmitter(apiModel)

  invariant(apiPackage.members.length === 1)
  const { members } = apiPackage.members[0]
  const found = members.find<ApiInterface>(
    (member): member is ApiInterface =>
      isApiInterface(member) && member.name === extractInterfaceName
  )
  invariant(found)
  const data: IInterfaceData = {
    properties: {},
    name: extractInterfaceName,
  }
  found.members.filter(isPropertySignature).forEach((member) => {
    data.properties[member.name] = getPropertyData(member, emitter)
  })
  validate(data)
  return data
}

function isApiInterface(value: ApiItem): value is ApiInterface {
  return value.kind === ApiItemKind.Interface
}

function isPropertySignature(value: ApiItem): value is ApiPropertySignature {
  return value.kind === ApiItemKind.PropertySignature
}

function getPropertyData(
  property: ApiPropertySignature,
  emitter: CustomMarkdownEmitter
): IPropertyData {
  // find the @defaultValue annotation
  const defaultValueBlock = property.tsdocComment?.customBlocks.find(
    (x) =>
      x.blockTag.tagNameWithUpperCase ===
      StandardTags.defaultValue.tagNameWithUpperCase
  )

  const isRequired = (() => {
    const firstToken = property.excerptTokens[0]?.text
    invariant(firstToken)
    const { name } = property
    invariant(firstToken.startsWith(name))
    const requiredMark = firstToken.slice(name.length).trim()
    invariant(requiredMark === ':' || requiredMark === '?:')
    return requiredMark === ':'
  })()

  return {
    excerpt: property.propertyTypeExcerpt.text,
    description: getMarkdownText(property.tsdocComment?.summarySection, {
      emitter,
      contextApiItem: property,
    }),
    defaultValue: getMarkdownText(defaultValueBlock?.content, {
      emitter,
      contextApiItem: property,
    }),
    isRequired,
  }
}

function getMarkdownText(
  docNode: DocNode | undefined,
  {
    emitter,
    contextApiItem,
  }: {
    emitter: CustomMarkdownEmitter
    contextApiItem: ApiItem
  }
) {
  if (!docNode) return ''
  const stringBuilder: StringBuilder = new StringBuilder()
  const text = emitter
    .emit(stringBuilder, docNode, {
      contextApiItem,
      onGetFilenameForApiItem: (resolvedApiItem) => {
        invariant(isPropertySignature(resolvedApiItem))
        const { parent } = resolvedApiItem
        invariant(parent)
        invariant(isApiInterface(parent))
        const interfaceName = parent.name
        return `#${interfaceName}.${resolvedApiItem.name}`
      },
    })
    .trim()
  return text
}

export interface IInterfaceData {
  properties: { [name: string]: IPropertyData }
  name: string
}

interface IPropertyData {
  excerpt: string
  description: string
  defaultValue: string
  isRequired: boolean
}

function validate(data: IInterfaceData) {
  Object.keys(data.properties).forEach((propName) => {
    const prop = data.properties[propName]
    if (!prop.description.trim()) {
      console.warn(
        `【Typescript Interface注释校验】：请为 "${data.name}.${propName}" 添加注释说明，否则用户会在API文档中看到空白的说明！`
      )
    }
  })
}

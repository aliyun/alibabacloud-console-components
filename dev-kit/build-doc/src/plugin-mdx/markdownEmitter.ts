import { DocNode, DocLinkTag, StringBuilder } from '@microsoft/tsdoc'
import {
  ApiModel,
  IResolveDeclarationReferenceResult,
  ApiItem,
} from '@microsoft/api-extractor-model'

import {
  MarkdownEmitter,
  IMarkdownEmitterContext,
  IMarkdownEmitterOptions,
} from '@microsoft/api-documenter/lib/markdown/MarkdownEmitter'

export interface ICustomMarkdownEmitterOptions extends IMarkdownEmitterOptions {
  contextApiItem: ApiItem | undefined

  onGetFilenameForApiItem: (apiItem: ApiItem) => string | undefined
}

export class CustomMarkdownEmitter extends MarkdownEmitter {
  private _apiModel: ApiModel

  public constructor(apiModel: ApiModel) {
    super()

    this._apiModel = apiModel
  }

  public emit(
    stringBuilder: StringBuilder,
    docNode: DocNode,
    options: ICustomMarkdownEmitterOptions
  ): string {
    return super.emit(stringBuilder, docNode, options)
  }

  // TODO: 验证链接功能的实现
  /** @override */
  protected writeLinkTagWithCodeDestination(
    docLinkTag: DocLinkTag,
    context: IMarkdownEmitterContext<ICustomMarkdownEmitterOptions>
  ): void {
    const { options } = context

    const result: IResolveDeclarationReferenceResult = this._apiModel.resolveDeclarationReference(
      docLinkTag.codeDestination!,
      options.contextApiItem
    )

    if (result.resolvedApiItem) {
      const filename: string | undefined = options.onGetFilenameForApiItem(
        result.resolvedApiItem
      )

      if (filename) {
        let linkText: string = docLinkTag.linkText || ''
        if (linkText.length === 0) {
          // Generate a name such as Namespace1.Namespace2.MyClass.myMethod()
          linkText = result.resolvedApiItem.getScopedNameWithinPackage()
        }
        if (linkText.length > 0) {
          const encodedLinkText: string = this.getEscapedText(
            linkText.replace(/\s+/g, ' ')
          )

          context.writer.write('[')
          context.writer.write(encodedLinkText)
          context.writer.write(`](${filename})`)
        } else {
          console.warn('WARNING: Unable to determine link text')
        }
      }
    } else if (result.errorMessage) {
      console.warn(
        `WARNING: Unable to resolve reference "${docLinkTag.codeDestination!.emitAsTsdoc()}": ${
          result.errorMessage
        }`
      )
    }
  }
}

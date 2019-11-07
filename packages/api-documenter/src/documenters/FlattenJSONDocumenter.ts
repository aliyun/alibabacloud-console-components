// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import * as path from 'path';

import {
  PackageName,
  FileSystem,
  NewlineKind
} from '@microsoft/node-core-library';
import {
  DocSection,
  StringBuilder,
  StandardTags,
  DocBlock,
  DocComment
} from '@microsoft/tsdoc';
import {
  ApiModel,
  ApiItem,
  ApiEnum,
  ApiPackage,
  ApiItemKind,
  ApiReleaseTagMixin,
  ApiDocumentedItem,
  ApiClass,
  ReleaseTag,
  ApiStaticMixin,
  ApiPropertyItem,
  ApiInterface,
  Excerpt,
  ApiParameterListMixin,
  ApiReturnTypeMixin,
  ApiDeclaredItem,
  ApiNamespace,
  IResolveDeclarationReferenceResult
} from '@microsoft/api-extractor-model';

import { Utilities } from '../utils/Utilities';
import { SimpleMarkdownEmitter } from '../markdown/SimpleMarkdownEmitter';

type IOutputMap = {
  /** make it easy to find the key to package item */
  '@root@': string;
} & {
  [key: string]: IOutput;
};
interface IOutput {
  name: string;
  kind: ApiItemKind;
  definitionHierarchy: string[];
  displayName: string;
  isBeta?: true;
  deprecatedWarning?: string;
  summary?: string;
  excerpt?: string;
  remarks?: string;
  examples?: string[];
  memberDescription?: IMemberDescription;
  defaultValue?: string;
}

interface IOutputPackageOrNamespace extends IOutput {
  kind: ApiItemKind.Namespace | ApiItemKind.Package;
  classes: IMemberDescription[];
  enumerations: IMemberDescription[];
  functions: IMemberDescription[];
  interfaces: IMemberDescription[];
  namespaces: IMemberDescription[];
  variables: IMemberDescription[];
  typeAliases: IMemberDescription[];
}

interface IOutputClass extends IOutput {
  kind: ApiItemKind.Class;
  events: IMemberDescription[];
  constructors: IMemberDescription[];
  properties: IMemberDescription[];
  methods: IMemberDescription[];
}

interface IOutputEnum extends IOutput {
  kind: ApiItemKind.Enum;
  enumMembers: IMemberDescription[];
}

interface IOutputInterface extends IOutput {
  kind: ApiItemKind.Interface;
  events: IMemberDescription[];
  properties: IMemberDescription[];
  methods: IMemberDescription[];
}

interface IOutputFunctionLike extends IOutput {
  kind:
    | ApiItemKind.Constructor
    | ApiItemKind.ConstructSignature
    | ApiItemKind.Method
    | ApiItemKind.MethodSignature
    | ApiItemKind.Function;
  parameters: {
    name: string;
    type: string;
    description?: string;
  }[];
  returnType: string;
  returnDescription: string;
  conciseSignature: string;
}

interface IMemberDescription {
  name: string;
  derivedFrom: string;
  isStatic?: true;
  propertyTypeExcerpt?: string;
  enumValue?: string;
}

/**
 * Renders API documentation in the Markdown file format.
 * For more info:  https://en.wikipedia.org/wiki/Markdown
 */
export class FlattenJSONDocumenter {
  private readonly _apiModel: ApiModel;
  private readonly _markdownEmitter: SimpleMarkdownEmitter;
  private generateFilesOpts: {
    outputFolder: string;
    outputFileName?: string;
  };

  public constructor(apiModel: ApiModel) {
    this._apiModel = apiModel;
    this._markdownEmitter = new SimpleMarkdownEmitter();
  }

  public generateFiles(opts: FlattenJSONDocumenter['generateFilesOpts']): void {
    this.generateFilesOpts = opts;

    this._deleteOldOutputFiles();

    for (const apiPackage of this._apiModel.packages) {
      console.log(`Writing ${apiPackage.name} package`);
      const outputMap: IOutputMap = {} as IOutputMap;
      this._writeApiItemPage(apiPackage, outputMap);
      this.writeToFile(apiPackage, outputMap);
    }
  }

  private _writeApiItemPage(apiItem: ApiItem, outputMap: IOutputMap): void {
    const anchorName: string = this._getAnchorNameForApiItem(apiItem);
    if (apiItem.kind === ApiItemKind.Package) {
      if (outputMap[anchorName]) {
        throw new Error(`duplicate package name ${anchorName}`);
      }
      outputMap['@root@'] = anchorName;
      outputMap[anchorName] = {} as IOutput;
    }
    if (!outputMap[anchorName]) {
      throw new Error(
        `expect ${anchorName} to exist before calling _writeApiItemPage`
      );
    }
    const output: IOutput = Object.assign(outputMap[anchorName] as {}, {
      name: anchorName,
      kind: apiItem.kind,
      displayName: apiItem.displayName,
      definitionHierarchy: []
    });

    this._addDefinitionHierarchy(output, apiItem);

    if (ApiReleaseTagMixin.isBaseClassOf(apiItem)) {
      if (apiItem.releaseTag === ReleaseTag.Beta) {
        output.isBeta = true;
      }
    }

    if (apiItem instanceof ApiDeclaredItem) {
      if (apiItem.excerpt.text.length > 0) {
        output.excerpt = apiItem.getExcerptWithModifiers();
      }
    }

    if (apiItem instanceof ApiDocumentedItem) {
      const tsdocComment: DocComment | undefined = apiItem.tsdocComment;
      if (tsdocComment) {
        // Write the @deprecated block
        if (tsdocComment.deprecatedBlock) {
          output.deprecatedWarning = this._getMarkdownTextFromNode(
            tsdocComment.deprecatedBlock.content,
            apiItem
          ).toString();
        }

        // Write the summary block
        output.summary = this._getMarkdownTextFromNode(
          tsdocComment.summarySection,
          apiItem
        ).toString();

        // Write the @remarks block
        if (tsdocComment.remarksBlock) {
          output.remarks = this._getMarkdownTextFromNode(
            tsdocComment.remarksBlock.content,
            apiItem
          ).toString();
        }

        // Write the @example blocks
        const exampleBlocks: DocBlock[] = tsdocComment.customBlocks.filter(
          x =>
            x.blockTag.tagNameWithUpperCase ===
            StandardTags.example.tagNameWithUpperCase
        );
        output.examples = exampleBlocks.map(exampleBlock =>
          this._getMarkdownTextFromNode(
            exampleBlock.content,
            apiItem
          ).toString()
        );

        // Write the @defaultValue blocks
        const defaultValueBlock:
          | DocBlock
          | undefined = tsdocComment.customBlocks.find(
          x =>
            x.blockTag.tagNameWithUpperCase ===
            StandardTags.defaultValue.tagNameWithUpperCase
        );
        output.defaultValue =
          defaultValueBlock &&
          this._getMarkdownTextFromNode(
            defaultValueBlock.content,
            apiItem
          ).toString();
      }
    }

    switch (apiItem.kind) {
      case ApiItemKind.Class:
        this._writeClassTables(
          output as IOutputClass,
          apiItem as ApiClass,
          outputMap
        );
        break;
      case ApiItemKind.Enum:
        this._writeEnumTables(
          output as IOutputEnum,
          apiItem as ApiEnum,
          outputMap
        );
        break;
      case ApiItemKind.Interface:
        this._writeInterfaceTables(
          output as IOutputInterface,
          apiItem as ApiInterface,
          outputMap
        );
        break;
      case ApiItemKind.Constructor:
      case ApiItemKind.ConstructSignature:
      case ApiItemKind.Method:
      case ApiItemKind.MethodSignature:
      case ApiItemKind.Function:
        this._writeParameterTables(
          output as IOutputFunctionLike,
          apiItem as ApiParameterListMixin
        );
        break;
      case ApiItemKind.Namespace:
        this._writePackageOrNamespaceTables(
          output as IOutputPackageOrNamespace,
          apiItem as ApiNamespace,
          outputMap
        );
        break;
      case ApiItemKind.Package:
        this._writePackageOrNamespaceTables(
          output as IOutputPackageOrNamespace,
          apiItem as ApiPackage,
          outputMap
        );
        break;
      case ApiItemKind.Property:
      case ApiItemKind.PropertySignature:
        break;
      case ApiItemKind.TypeAlias:
        break;
      case ApiItemKind.Variable:
        break;
      case ApiItemKind.EnumMember:
        break;
      default:
        throw new Error('Unsupported API item kind: ' + apiItem.kind);
    }
  }

  private writeToFile(apiItem: ApiItem, outputMap: IOutputMap): void {
    if (apiItem.kind !== ApiItemKind.Package) {
      throw new Error(
        `only package can be written to file in 'flatten-json' mode`
      );
    }
    const filename: string = path.join(
      this.generateFilesOpts.outputFolder,
      this.generateFilesOpts.outputFileName || PackageName.getUnscopedName(apiItem.displayName) + '.json'
    );
    FileSystem.writeFile(filename, JSON.stringify(outputMap), {
      convertLineEndings: NewlineKind.CrLf
    });
  }

  /**
   * GENERATE PAGE: PACKAGE or NAMESPACE
   */
  private _writePackageOrNamespaceTables(
    output: IOutputPackageOrNamespace,
    apiContainer: ApiPackage | ApiNamespace,
    outputMap: IOutputMap
  ): void {
    Object.assign(output, {
      classes: [],
      enumerations: [],
      functions: [],
      interfaces: [],
      namespaces: [],
      variables: [],
      typeAliases: []
    });

    const apiMembers: ReadonlyArray<ApiItem> =
      apiContainer.kind === ApiItemKind.Package
        ? (apiContainer as ApiPackage).entryPoints[0].members
        : (apiContainer as ApiNamespace).members;

    for (const apiMember of apiMembers) {
      const [memberDescription] = this._addMemberToOutput(
        apiContainer,
        apiMember,
        outputMap
      );

      switch (apiMember.kind) {
        case ApiItemKind.Class:
          output.classes.push(memberDescription);
          break;

        case ApiItemKind.Enum:
          output.enumerations.push(memberDescription);
          break;

        case ApiItemKind.Interface:
          output.interfaces.push(memberDescription);
          break;

        case ApiItemKind.Namespace:
          output.namespaces.push(memberDescription);
          break;

        case ApiItemKind.Function:
          output.functions.push(memberDescription);
          break;

        case ApiItemKind.TypeAlias:
          output.typeAliases.push(memberDescription);
          break;

        case ApiItemKind.Variable:
          output.variables.push(memberDescription);
          break;
      }
    }

    for (const apiMember of apiMembers) {
      switch (apiMember.kind) {
        case ApiItemKind.Class:
        case ApiItemKind.Enum:
        case ApiItemKind.Interface:
        case ApiItemKind.Namespace:
        case ApiItemKind.Function:
        case ApiItemKind.TypeAlias:
        case ApiItemKind.Variable:
          this._writeApiItemPage(apiMember, outputMap);
          break;
      }
    }
  }

  /**
   * GENERATE PAGE: CLASS
   */
  private _writeClassTables(
    output: IOutputClass,
    apiClass: ApiClass,
    outputMap: IOutputMap
  ): void {
    Object.assign(output, {
      events: [],
      constructors: [],
      properties: [],
      methods: []
    });

    for (const apiMember of apiClass.members) {
      const [memberDescription] = this._addMemberToOutput(
        apiClass,
        apiMember,
        outputMap
      );

      if (ApiStaticMixin.isBaseClassOf(apiMember)) {
        if (apiMember.isStatic) {
          memberDescription.isStatic = apiMember.isStatic;
        }
      }

      switch (apiMember.kind) {
        case ApiItemKind.Constructor: {
          output.constructors.push(memberDescription);
          break;
        }
        case ApiItemKind.Method: {
          output.methods.push(memberDescription);
          break;
        }
        case ApiItemKind.Property: {
          this._addPropertyType(apiMember, memberDescription);
          if ((apiMember as ApiPropertyItem).isEventProperty) {
            output.events.push(memberDescription);
          } else {
            output.properties.push(memberDescription);
          }
          break;
        }
      }
    }

    for (const apiMember of apiClass.members) {
      switch (apiMember.kind) {
        case ApiItemKind.Constructor:
        case ApiItemKind.Method:
        case ApiItemKind.Property:
          this._writeApiItemPage(apiMember, outputMap);
          break;
      }
    }
  }

  /**
   * GENERATE PAGE: ENUM
   */
  private _writeEnumTables(
    output: IOutputEnum,
    apiEnum: ApiEnum,
    outputMap: IOutputMap
  ): void {
    output.enumMembers = [];

    for (const apiEnumMember of apiEnum.members) {
      const [memberDescription] = this._addMemberToOutput(
        apiEnum,
        apiEnumMember,
        outputMap
      );
      memberDescription.enumValue = apiEnumMember.initializerExcerpt.text;
      output.enumMembers.push(memberDescription);
      this._writeApiItemPage(apiEnumMember, outputMap);
    }
  }

  /**
   * GENERATE PAGE: INTERFACE
   */
  private _writeInterfaceTables(
    output: IOutputInterface,
    apiClass: ApiInterface,
    outputMap: IOutputMap
  ): void {
    Object.assign(output, {
      events: [],
      properties: [],
      methods: []
    });

    for (const apiMember of apiClass.members) {
      const [memberDescription] = this._addMemberToOutput(
        apiClass,
        apiMember,
        outputMap
      );

      switch (apiMember.kind) {
        case ApiItemKind.ConstructSignature:
        case ApiItemKind.MethodSignature: {
          output.methods.push(memberDescription);
          break;
        }
        case ApiItemKind.PropertySignature: {
          this._addPropertyType(apiMember, memberDescription);
          if ((apiMember as ApiPropertyItem).isEventProperty) {
            output.events.push(memberDescription);
          } else {
            output.properties.push(memberDescription);
          }
          break;
        }
      }
    }

    for (const apiMember of apiClass.members) {
      switch (apiMember.kind) {
        case ApiItemKind.ConstructSignature:
        case ApiItemKind.MethodSignature:
        case ApiItemKind.PropertySignature:
          this._writeApiItemPage(apiMember, outputMap);
          break;
      }
    }
  }

  /**
   * GENERATE PAGE: FUNCTION-LIKE
   */
  private _writeParameterTables(
    output: IOutputFunctionLike,
    apiParameterListMixin: ApiParameterListMixin
  ): void {
    output.conciseSignature = Utilities.getConciseSignature(
      apiParameterListMixin
    );
    output.parameters = [];

    for (const apiParameter of apiParameterListMixin.parameters) {
      const param: {
        description?: string;
        name: string;
        type: string;
      } = {
        name: apiParameter.name,
        type: apiParameter.parameterTypeExcerpt.text
      };
      if (apiParameter.tsdocParamBlock) {
        param.description = this._getMarkdownTextFromNode(
          apiParameter.tsdocParamBlock.content,
          apiParameterListMixin
        ).toString();
      }
      output.parameters.push(param);
    }

    if (ApiReturnTypeMixin.isBaseClassOf(apiParameterListMixin)) {
      const returnTypeExcerpt: Excerpt =
        apiParameterListMixin.returnTypeExcerpt;
      output.returnType = returnTypeExcerpt.text.trim();

      if (apiParameterListMixin instanceof ApiDocumentedItem) {
        if (
          apiParameterListMixin.tsdocComment &&
          apiParameterListMixin.tsdocComment.returnsBlock
        ) {
          output.returnDescription = this._getMarkdownTextFromNode(
            apiParameterListMixin.tsdocComment.returnsBlock.content,
            apiParameterListMixin
          ).toString();
        }
      }
    }
  }

  private _addPropertyType(
    apiItem: ApiItem,
    memberDescription: IMemberDescription
  ): void {
    if (apiItem instanceof ApiPropertyItem) {
      memberDescription.propertyTypeExcerpt = apiItem.propertyTypeExcerpt.text;
    }
  }

  private _addDefinitionHierarchy(output: IOutput, apiItem: ApiItem): void {
    for (const hierarchyItem of apiItem.getHierarchy()) {
      switch (hierarchyItem.kind) {
        case ApiItemKind.Model:
        case ApiItemKind.Package:
        case ApiItemKind.EntryPoint:
          // We don't show the model as part of the breadcrumb because it is the root-level container.
          // We don't show the entry point because today API Extractor doesn't support multiple entry points;
          // this may change in the future.
          break;
        default:
          output.definitionHierarchy.push(
            this._getAnchorNameForApiItem(hierarchyItem)
          );
      }
    }
  }

  private _getAnchorNameForApiItem(apiItem: ApiItem): string {
    if (apiItem.kind === ApiItemKind.Package) {
      return PackageName.getUnscopedName(apiItem.displayName);
    }

    let baseName: string = '';
    for (const hierarchyItem of apiItem.getHierarchy()) {
      // For overloaded methods, add a suffix such as "MyClass.myMethod_2".
      let qualifiedName: string = hierarchyItem.displayName;
      if (ApiParameterListMixin.isBaseClassOf(hierarchyItem)) {
        if (hierarchyItem.overloadIndex > 1) {
          // Subtract one for compatibility with earlier releases of API Documenter.
          // (This will get revamped when we fix GitHub issue #1308)
          qualifiedName += `_${hierarchyItem.overloadIndex - 1}`;
        }
      }

      switch (hierarchyItem.kind) {
        case ApiItemKind.Model:
        case ApiItemKind.EntryPoint:
          break;
        case ApiItemKind.Package:
          // baseName = PackageName.getUnscopedName(hierarchyItem.displayName);
          break;
        default:
          baseName += '.' + qualifiedName;
      }
    }

    return baseName.replace(/^\./, ''); // remove start '.'
  }

  private _getPageFragmentForApiItem(apiItem: ApiItem): string {
    return '#' + this._getAnchorNameForApiItem(apiItem);
  }

  private _deleteOldOutputFiles(): void {
    console.log(
      'Deleting old output from ' + this.generateFilesOpts.outputFolder
    );
    FileSystem.ensureEmptyFolder(this.generateFilesOpts.outputFolder);
  }

  private _getMarkdownTextFromNode(
    node: DocSection,
    apiItem: ApiItem,
    stringBuilder: StringBuilder = new StringBuilder()
  ): StringBuilder {
    this._markdownEmitter.emit(stringBuilder, node, {
      // tslint:disable-next-line:typedef
      onGetLinkURLForDocLink: docLinkTag => {
        let linkURL: string = '';
        const resolveResult: IResolveDeclarationReferenceResult = this._apiModel.resolveDeclarationReference(
          docLinkTag.codeDestination!,
          apiItem
        );
        if (resolveResult.resolvedApiItem) {
          linkURL = this._getPageFragmentForApiItem(
            resolveResult.resolvedApiItem
          );
        } else {
          console.log(
            `WARNING: Unable to resolve reference "${docLinkTag.codeDestination!.emitAsTsdoc()}": ` +
              resolveResult.errorMessage
          );
        }
        return linkURL;
      }
    });
    return stringBuilder;
  }

  private _addMemberToOutput(
    parent: ApiItem,
    child: ApiItem,
    outputMap: IOutputMap
  ): [IMemberDescription, IOutput] {
    const memberDescription: IMemberDescription = {
      name: this._getAnchorNameForApiItem(child),
      derivedFrom: this._getAnchorNameForApiItem(parent)
    };
    const memberOutput: IOutput = {
      memberDescription
    } as IOutput;
    if (outputMap[memberDescription.name]) {
      throw new Error(
        `member ${memberDescription.name} already exist: ` +
          `${JSON.stringify(outputMap[memberDescription.name])}`
      );
    }
    outputMap[memberDescription.name] = memberOutput;
    return [memberDescription, memberOutput];
  }
}

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
  DocPlainText,
  DocLinkTag,
  TSDocConfiguration,
  StringBuilder,
  DocNodeKind,
  DocParagraph,
  DocCodeSpan,
  DocFencedCode,
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
  ApiNamespace
} from '@microsoft/api-extractor-model';

import { CustomDocNodes } from '../nodes/CustomDocNodeKind';
import { DocHeading } from '../nodes/DocHeading';
import { DocTable } from '../nodes/DocTable';
import { DocEmphasisSpan } from '../nodes/DocEmphasisSpan';
import { DocTableRow } from '../nodes/DocTableRow';
import { DocTableCell } from '../nodes/DocTableCell';
import { DocNoteBox } from '../nodes/DocNoteBox';
import { Utilities } from '../utils/Utilities';
import { FlattenMarkdownEmitter } from '../markdown/FlattenMarkdownEmitter';

/**
 * Renders API documentation in the Markdown file format.
 * For more info:  https://en.wikipedia.org/wiki/Markdown
 */
export class FlattenMarkdownDocumenter {
  private readonly _apiModel: ApiModel;
  private readonly _tsdocConfiguration: TSDocConfiguration;
  private readonly _markdownEmitter: FlattenMarkdownEmitter;
  private generateFilesOpts: {
    outputFolder: string;
    topLinkText: string;
    topLinkURL: string;
    startHeaderLevel: number;
  };

  public constructor(apiModel: ApiModel) {
    this._apiModel = apiModel;
    this._tsdocConfiguration = CustomDocNodes.configuration;
    this._markdownEmitter = new FlattenMarkdownEmitter(this._apiModel);
  }

  public generateFiles(
    opts: FlattenMarkdownDocumenter['generateFilesOpts']
  ): void {
    this.generateFilesOpts = opts;

    this._deleteOldOutputFiles();

    for (const apiPackage of this._apiModel.packages) {
      console.log(`Writing ${apiPackage.name} package`);
      const outputMap: Map<string, DocSection> = new Map<string, DocSection>();
      this._writeApiItemPage(apiPackage, outputMap);
      this.writeToFile(apiPackage, outputMap);
    }
  }

  private _writeApiItemPage(
    apiItem: ApiItem,
    outputMap: Map<string, DocSection>
  ): void {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;
    const output: DocSection = new DocSection({
      configuration: this._tsdocConfiguration
    });
    const anchorName: string = this._getAnchorNameForApiItem(apiItem);
    if (outputMap.has(anchorName)) {
      throw new Error(`duplicate _writeApiItemPage call to ${anchorName}`);
    }
    outputMap.set(anchorName, output);

    const scopedName: string = apiItem.getScopedNameWithinPackage();

    switch (apiItem.kind) {
      case ApiItemKind.Class:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} class`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Enum:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} enum`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Interface:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} interface`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Constructor:
      case ApiItemKind.ConstructSignature:
        output.appendNode(
          new DocHeading({
            configuration,
            title: scopedName,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Method:
      case ApiItemKind.MethodSignature:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} method`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Function:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} function`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Namespace:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} namespace`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Package:
        const unscopedPackageName: string = PackageName.getUnscopedName(
          apiItem.displayName
        );
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${unscopedPackageName} package`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Property:
      case ApiItemKind.PropertySignature:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} property`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.TypeAlias:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} type`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      case ApiItemKind.Variable:
        output.appendNode(
          new DocHeading({
            configuration,
            title: `${scopedName} variable`,
            anchorName: this._getAnchorNameForApiItem(apiItem),
            level: this.generateFilesOpts.startHeaderLevel
          })
        );
        break;
      default:
        throw new Error('Unsupported API item kind: ' + apiItem.kind);
    }

    this._writeBreadcrumb(output, apiItem);

    if (ApiReleaseTagMixin.isBaseClassOf(apiItem)) {
      if (apiItem.releaseTag === ReleaseTag.Beta) {
        this._writeBetaWarning(output);
      }
    }

    if (apiItem instanceof ApiDocumentedItem) {
      const tsdocComment: DocComment | undefined = apiItem.tsdocComment;

      if (tsdocComment) {
        if (tsdocComment.deprecatedBlock) {
          output.appendNode(
            new DocNoteBox({ configuration: this._tsdocConfiguration }, [
              new DocParagraph({ configuration: this._tsdocConfiguration }, [
                new DocPlainText({
                  configuration: this._tsdocConfiguration,
                  text: 'Warning: This API is now obsolete. '
                })
              ]),
              ...tsdocComment.deprecatedBlock.content.nodes
            ])
          );
        }

        this._appendSection(output, tsdocComment.summarySection);
      }
    }

    if (apiItem instanceof ApiDeclaredItem) {
      if (apiItem.excerpt.text.length > 0) {
        output.appendNode(
          new DocParagraph({ configuration }, [
            new DocEmphasisSpan({ configuration, bold: true }, [
              new DocPlainText({ configuration, text: 'Signature:' })
            ])
          ])
        );
        output.appendNode(
          new DocFencedCode({
            configuration,
            code: apiItem.getExcerptWithModifiers(),
            language: 'typescript'
          })
        );
      }
    }

    if (apiItem instanceof ApiDocumentedItem) {
      const tsdocComment: DocComment | undefined = apiItem.tsdocComment;

      if (tsdocComment) {
        // Write the @remarks block
        if (tsdocComment.remarksBlock) {
          output.appendNode(
            new DocHeading({
              configuration: this._tsdocConfiguration,
              title: 'Remarks',
              level: this.generateFilesOpts.startHeaderLevel + 1
            })
          );
          this._appendSection(output, tsdocComment.remarksBlock.content);
        }

        // Write the @example blocks
        const exampleBlocks: DocBlock[] = tsdocComment.customBlocks.filter(
          x =>
            x.blockTag.tagNameWithUpperCase ===
            StandardTags.example.tagNameWithUpperCase
        );

        let exampleNumber: number = 1;
        for (const exampleBlock of exampleBlocks) {
          const heading: string =
            exampleBlocks.length > 1 ? `Example ${exampleNumber}` : 'Example';

          output.appendNode(
            new DocHeading({
              configuration: this._tsdocConfiguration,
              title: heading,
              level: this.generateFilesOpts.startHeaderLevel + 1
            })
          );

          this._appendSection(output, exampleBlock.content);

          ++exampleNumber;
        }
      }
    }

    switch (apiItem.kind) {
      case ApiItemKind.Class:
        this._writeClassTables(output, apiItem as ApiClass, outputMap);
        break;
      case ApiItemKind.Enum:
        this._writeEnumTables(output, apiItem as ApiEnum);
        break;
      case ApiItemKind.Interface:
        this._writeInterfaceTables(output, apiItem as ApiInterface, outputMap);
        break;
      case ApiItemKind.Constructor:
      case ApiItemKind.ConstructSignature:
      case ApiItemKind.Method:
      case ApiItemKind.MethodSignature:
      case ApiItemKind.Function:
        this._writeParameterTables(output, apiItem as ApiParameterListMixin);
        break;
      case ApiItemKind.Namespace:
        this._writePackageOrNamespaceTables(
          output,
          apiItem as ApiNamespace,
          outputMap
        );
        break;
      case ApiItemKind.Package:
        this._writePackageOrNamespaceTables(
          output,
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
      default:
        throw new Error('Unsupported API item kind: ' + apiItem.kind);
    }
  }

  private writeToFile(
    apiItem: ApiItem,
    outputMap: Map<string, DocSection>
  ): void {
    const filename: string = path.join(
      this.generateFilesOpts.outputFolder,
      this._getFilenameForApiItem(apiItem)
    );
    const stringBuilder: StringBuilder = new StringBuilder();

    stringBuilder.append(
      '<!-- Do not edit this file. It is automatically generated by API Documenter. -->\n\n'
    );

    outputMap.forEach((docSection, key) => {
      this._markdownEmitter.emit(stringBuilder, docSection, {
        contextApiItem: apiItem,
        onGetFilenameForApiItem: (apiItemForFilename: ApiItem) => {
          return this._getPageFragmentForApiItem(apiItemForFilename);
        }
      });
    });

    FileSystem.writeFile(filename, stringBuilder.toString(), {
      convertLineEndings: NewlineKind.CrLf
    });
  }

  /**
   * GENERATE PAGE: PACKAGE or NAMESPACE
   */
  private _writePackageOrNamespaceTables(
    output: DocSection,
    apiContainer: ApiPackage | ApiNamespace,
    outputMap: Map<string, DocSection>
  ): void {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const classesTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Class', 'Description']
    });

    const enumerationsTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Enumeration', 'Description']
    });

    const functionsTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Function', 'Description']
    });

    const interfacesTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Interface', 'Description']
    });

    const namespacesTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Namespace', 'Description']
    });

    const variablesTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Variable', 'Description']
    });

    const typeAliasesTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Type Alias', 'Description']
    });

    const apiMembers: ReadonlyArray<ApiItem> =
      apiContainer.kind === ApiItemKind.Package
        ? (apiContainer as ApiPackage).entryPoints[0].members
        : (apiContainer as ApiNamespace).members;

    for (const apiMember of apiMembers) {
      const row: DocTableRow = new DocTableRow({ configuration }, [
        this._createTitleCell(apiMember),
        this._createDescriptionCell(apiMember)
      ]);

      switch (apiMember.kind) {
        case ApiItemKind.Class:
          classesTable.addRow(row);
          break;

        case ApiItemKind.Enum:
          enumerationsTable.addRow(row);
          break;

        case ApiItemKind.Interface:
          interfacesTable.addRow(row);
          break;

        case ApiItemKind.Namespace:
          namespacesTable.addRow(row);
          break;

        case ApiItemKind.Function:
          functionsTable.addRow(row);
          break;

        case ApiItemKind.TypeAlias:
          typeAliasesTable.addRow(row);
          break;

        case ApiItemKind.Variable:
          variablesTable.addRow(row);
          break;
      }
    }

    if (classesTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Classes',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(classesTable);
    }

    if (enumerationsTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Enumerations',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(enumerationsTable);
    }
    if (functionsTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Functions',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(functionsTable);
    }

    if (interfacesTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Interfaces',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(interfacesTable);
    }

    if (namespacesTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Namespaces',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(namespacesTable);
    }

    if (variablesTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Variables',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(variablesTable);
    }

    if (typeAliasesTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Type Aliases',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(typeAliasesTable);
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
    output: DocSection,
    apiClass: ApiClass,
    outputMap: Map<string, DocSection>
  ): void {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const eventsTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Property', 'Modifiers', 'Type', 'Description']
    });

    const constructorsTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Constructor', 'Modifiers', 'Description']
    });

    const propertiesTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Property', 'Modifiers', 'Type', 'Description']
    });

    const methodsTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Method', 'Modifiers', 'Description']
    });

    for (const apiMember of apiClass.members) {
      switch (apiMember.kind) {
        case ApiItemKind.Constructor: {
          constructorsTable.addRow(
            new DocTableRow({ configuration }, [
              this._createTitleCell(apiMember),
              this._createModifiersCell(apiMember),
              this._createDescriptionCell(apiMember)
            ])
          );
          break;
        }
        case ApiItemKind.Method: {
          methodsTable.addRow(
            new DocTableRow({ configuration }, [
              this._createTitleCell(apiMember),
              this._createModifiersCell(apiMember),
              this._createDescriptionCell(apiMember)
            ])
          );
          break;
        }
        case ApiItemKind.Property: {
          if ((apiMember as ApiPropertyItem).isEventProperty) {
            eventsTable.addRow(
              new DocTableRow({ configuration }, [
                this._createTitleCell(apiMember),
                this._createModifiersCell(apiMember),
                this._createPropertyTypeCell(apiMember),
                this._createDescriptionCell(apiMember)
              ])
            );
          } else {
            propertiesTable.addRow(
              new DocTableRow({ configuration }, [
                this._createTitleCell(apiMember),
                this._createModifiersCell(apiMember),
                this._createPropertyTypeCell(apiMember),
                this._createDescriptionCell(apiMember)
              ])
            );
          }
          break;
        }
      }
    }

    if (eventsTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Events',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(eventsTable);
    }

    if (constructorsTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Constructors',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(constructorsTable);
    }

    if (propertiesTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Properties',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(propertiesTable);
    }

    if (methodsTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Methods',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(methodsTable);
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
  private _writeEnumTables(output: DocSection, apiEnum: ApiEnum): void {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const enumMembersTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Member', 'Value', 'Description']
    });

    for (const apiEnumMember of apiEnum.members) {
      enumMembersTable.addRow(
        new DocTableRow({ configuration }, [
          new DocTableCell({ configuration }, [
            new DocParagraph({ configuration }, [
              new DocPlainText({
                configuration,
                text: Utilities.getConciseSignature(apiEnumMember)
              })
            ])
          ]),

          new DocTableCell({ configuration }, [
            new DocParagraph({ configuration }, [
              new DocCodeSpan({
                configuration,
                code: apiEnumMember.initializerExcerpt.text
              })
            ])
          ]),

          this._createDescriptionCell(apiEnumMember)
        ])
      );
    }

    if (enumMembersTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Enumeration Members',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(enumMembersTable);
    }
  }

  /**
   * GENERATE PAGE: INTERFACE
   */
  private _writeInterfaceTables(
    output: DocSection,
    apiClass: ApiInterface,
    outputMap: Map<string, DocSection>
  ): void {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const eventsTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Property', 'Type', 'Description']
    });

    const propertiesTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Property', 'Type', 'Description']
    });

    const methodsTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Method', 'Description']
    });

    for (const apiMember of apiClass.members) {
      switch (apiMember.kind) {
        case ApiItemKind.ConstructSignature:
        case ApiItemKind.MethodSignature: {
          methodsTable.addRow(
            new DocTableRow({ configuration }, [
              this._createTitleCell(apiMember),
              this._createDescriptionCell(apiMember)
            ])
          );

          break;
        }
        case ApiItemKind.PropertySignature: {
          if ((apiMember as ApiPropertyItem).isEventProperty) {
            eventsTable.addRow(
              new DocTableRow({ configuration }, [
                this._createTitleCell(apiMember),
                this._createPropertyTypeCell(apiMember),
                this._createDescriptionCell(apiMember)
              ])
            );
          } else {
            propertiesTable.addRow(
              new DocTableRow({ configuration }, [
                this._createTitleCell(apiMember),
                this._createPropertyTypeCell(apiMember),
                this._createDescriptionCell(apiMember)
              ])
            );
          }

          break;
        }
      }
    }

    if (eventsTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Events',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(eventsTable);
    }

    if (propertiesTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Properties',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(propertiesTable);
    }

    if (methodsTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Methods',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(methodsTable);
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
    output: DocSection,
    apiParameterListMixin: ApiParameterListMixin
  ): void {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const parametersTable: DocTable = new DocTable({
      configuration,
      headerTitles: ['Parameter', 'Type', 'Description']
    });

    for (const apiParameter of apiParameterListMixin.parameters) {
      const parameterDescription: DocSection = new DocSection({
        configuration
      });
      if (apiParameter.tsdocParamBlock) {
        this._appendSection(
          parameterDescription,
          apiParameter.tsdocParamBlock.content
        );
      }

      parametersTable.addRow(
        new DocTableRow({ configuration }, [
          new DocTableCell({ configuration }, [
            new DocParagraph({ configuration }, [
              new DocPlainText({ configuration, text: apiParameter.name })
            ])
          ]),
          new DocTableCell({ configuration }, [
            new DocParagraph({ configuration }, [
              new DocCodeSpan({
                configuration,
                code: apiParameter.parameterTypeExcerpt.text
              })
            ])
          ]),
          new DocTableCell({ configuration }, parameterDescription.nodes)
        ])
      );
    }

    if (parametersTable.rows.length > 0) {
      output.appendNode(
        new DocHeading({
          configuration: this._tsdocConfiguration,
          title: 'Parameters',
          level: this.generateFilesOpts.startHeaderLevel + 1
        })
      );
      output.appendNode(parametersTable);
    }

    if (ApiReturnTypeMixin.isBaseClassOf(apiParameterListMixin)) {
      const returnTypeExcerpt: Excerpt =
        apiParameterListMixin.returnTypeExcerpt;
      output.appendNode(
        new DocParagraph({ configuration }, [
          new DocEmphasisSpan({ configuration, bold: true }, [
            new DocPlainText({ configuration, text: 'Returns:' })
          ])
        ])
      );

      output.appendNode(
        new DocParagraph({ configuration }, [
          new DocCodeSpan({
            configuration,
            code: returnTypeExcerpt.text.trim() || '(not declared)'
          })
        ])
      );

      if (apiParameterListMixin instanceof ApiDocumentedItem) {
        if (
          apiParameterListMixin.tsdocComment &&
          apiParameterListMixin.tsdocComment.returnsBlock
        ) {
          this._appendSection(
            output,
            apiParameterListMixin.tsdocComment.returnsBlock.content
          );
        }
      }
    }
  }

  private _createTitleCell(apiItem: ApiItem): DocTableCell {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    return new DocTableCell({ configuration }, [
      new DocParagraph({ configuration }, [
        new DocLinkTag({
          configuration,
          tagName: '@link',
          linkText: Utilities.getConciseSignature(apiItem),
          urlDestination: this._getPageFragmentForApiItem(apiItem)
        })
      ])
    ]);
  }

  /**
   * This generates a DocTableCell for an ApiItem including the summary section and "(BETA)" annotation.
   *
   * @remarks
   * We mostly assume that the input is an ApiDocumentedItem, but it's easier to perform this as a runtime
   * check than to have each caller perform a type cast.
   */
  private _createDescriptionCell(apiItem: ApiItem): DocTableCell {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const section: DocSection = new DocSection({ configuration });

    if (ApiReleaseTagMixin.isBaseClassOf(apiItem)) {
      if (apiItem.releaseTag === ReleaseTag.Beta) {
        section.appendNodesInParagraph([
          new DocEmphasisSpan({ configuration, bold: true, italic: true }, [
            new DocPlainText({ configuration, text: '(BETA)' })
          ]),
          new DocPlainText({ configuration, text: ' ' })
        ]);
      }
    }

    if (apiItem instanceof ApiDocumentedItem) {
      if (apiItem.tsdocComment !== undefined) {
        this._appendAndMergeSection(
          section,
          apiItem.tsdocComment.summarySection
        );
      }
    }

    return new DocTableCell({ configuration }, section.nodes);
  }

  private _createModifiersCell(apiItem: ApiItem): DocTableCell {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const section: DocSection = new DocSection({ configuration });

    if (ApiStaticMixin.isBaseClassOf(apiItem)) {
      if (apiItem.isStatic) {
        section.appendNodeInParagraph(
          new DocCodeSpan({ configuration, code: 'static' })
        );
      }
    }

    return new DocTableCell({ configuration }, section.nodes);
  }

  private _createPropertyTypeCell(apiItem: ApiItem): DocTableCell {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;

    const section: DocSection = new DocSection({ configuration });

    if (apiItem instanceof ApiPropertyItem) {
      section.appendNodeInParagraph(
        new DocCodeSpan({
          configuration,
          code: apiItem.propertyTypeExcerpt.text
        })
      );
    }

    return new DocTableCell({ configuration }, section.nodes);
  }

  private _writeBreadcrumb(output: DocSection, apiItem: ApiItem): void {
    const paragraphNode: DocParagraph = new DocParagraph({
      configuration: this._tsdocConfiguration
    });

    paragraphNode.appendNode(
      new DocPlainText({
        configuration: this._tsdocConfiguration,
        text: 'Definition Hierarchy: '
      })
    );

    paragraphNode.appendNode(
      new DocLinkTag({
        configuration: this._tsdocConfiguration,
        tagName: '@link',
        linkText: this.generateFilesOpts.topLinkText,
        urlDestination: this.generateFilesOpts.topLinkURL
      })
    );

    for (const hierarchyItem of apiItem.getHierarchy()) {
      switch (hierarchyItem.kind) {
        case ApiItemKind.Model:
        case ApiItemKind.EntryPoint:
          // We don't show the model as part of the breadcrumb because it is the root-level container.
          // We don't show the entry point because today API Extractor doesn't support multiple entry points;
          // this may change in the future.
          break;
        default:
          paragraphNode.appendNodes([
            new DocPlainText({
              configuration: this._tsdocConfiguration,
              text: ' > '
            }),
            new DocLinkTag({
              configuration: this._tsdocConfiguration,
              tagName: '@link',
              linkText: hierarchyItem.displayName,
              urlDestination: this._getPageFragmentForApiItem(hierarchyItem)
            })
          ]);
      }
    }
    output.appendNode(paragraphNode);
  }

  private _writeBetaWarning(output: DocSection): void {
    const configuration: TSDocConfiguration = this._tsdocConfiguration;
    const betaWarning: string =
      'This API is provided as a preview for developers and may change' +
      ' based on feedback that we receive.  Do not use this API in a production environment.';
    output.appendNode(
      new DocNoteBox({ configuration }, [
        new DocParagraph({ configuration }, [
          new DocPlainText({ configuration, text: betaWarning })
        ])
      ])
    );
  }

  private _appendSection(output: DocSection, docSection: DocSection): void {
    for (const node of docSection.nodes) {
      output.appendNode(node);
    }
  }

  private _appendAndMergeSection(
    output: DocSection,
    docSection: DocSection
  ): void {
    let firstNode: boolean = true;
    for (const node of docSection.nodes) {
      if (firstNode) {
        if (node.kind === DocNodeKind.Paragraph) {
          output.appendNodesInParagraph(node.getChildNodes());
          firstNode = false;
          continue;
        }
      }
      firstNode = false;

      output.appendNode(node);
    }
  }

  private _getFilenameForApiItem(apiItem: ApiItem): string {
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
          baseName = PackageName.getUnscopedName(hierarchyItem.displayName);
          break;
        default:
          baseName += '.' + qualifiedName;
      }
    }
    return baseName.toLowerCase() + '.md';
  }

  private _getAnchorNameForApiItem(apiItem: ApiItem): string {
    return this._getFilenameForApiItem(apiItem).slice(0, -3);
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
}

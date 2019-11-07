// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import {
  CommandLineStringParameter,
  CommandLineIntegerParameter
} from '@microsoft/ts-command-line';
import { ApiDocumenterCommandLine } from './ApiDocumenterCommandLine';
import { BaseAction } from './BaseAction';
import { FlattenMarkdownDocumenter } from '../documenters/FlattenMarkdownDocumenter';
import { ApiModel } from '@microsoft/api-extractor-model';

export class FlattenMarkdownAction extends BaseAction {
  protected topLinkText: string;
  protected topLinkURL: string;
  protected startHeaderLevel: number;
  /** topLink is the first link in breadcrumbs */
  private _topLinkTextParameter: CommandLineStringParameter;
  /** topLink is the first link in breadcrumbs */
  private _topLinkURLParameter: CommandLineStringParameter;
  /** The level of the top headers */
  private _startHeaderLevelParameter: CommandLineIntegerParameter;

  constructor(parser: ApiDocumenterCommandLine) {
    super({
      actionName: 'flatten-markdown',
      summary: 'Generate documentation as Markdown files (*.md)',
      documentation:
        'Generates API documentation as a collection of files in' +
        ' Markdown format, suitable for example for publishing on a GitHub site.'
    });
  }

  // override
  protected onExecute(): Promise<void> {
    this.topLinkText = this._topLinkTextParameter.value || 'APIs';
    this.topLinkURL = this._topLinkURLParameter.value || '#APIs';
    this.startHeaderLevel = Number(this._startHeaderLevelParameter.value) || 2;
    const apiModel: ApiModel = this.buildApiModel();
    const markdownDocumenter: FlattenMarkdownDocumenter = new FlattenMarkdownDocumenter(
      apiModel
    );
    markdownDocumenter.generateFiles({
      outputFolder: this.outputFolder,
      topLinkText: this.topLinkText,
      topLinkURL: this.topLinkURL,
      startHeaderLevel: this.startHeaderLevel
    });
    return Promise.resolve();
  }

  protected onDefineParameters(): void {
    super.onDefineParameters();
    this._topLinkTextParameter = this.defineStringParameter({
      parameterLongName: '--top-link-text',
      argumentName: 'TopLinkText'.toUpperCase(),
      description:
        `Specifies the text of the first link in breadcrumbs.` +
        ` If omitted, the default is "APIs"`
    });
    this._topLinkURLParameter = this.defineStringParameter({
      parameterLongName: '--top-link-url',
      argumentName: 'TopLinkURL'.toUpperCase(),
      description:
        `Specifies the URL of the first link in breadcrumbs.` +
        ` If omitted, the default is "#APIs"`
    });
    this._startHeaderLevelParameter = this.defineIntegerParameter({
      parameterLongName: '--start-header-level',
      argumentName: 'StartHeaderLevel'.toUpperCase(),
      description:
        `Specifies the level of the top headers.` +
        ` If omitted, the default is 2(##)`
    });
  }
}

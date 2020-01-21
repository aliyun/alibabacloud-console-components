// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { ApiDocumenterCommandLine } from './ApiDocumenterCommandLine';
import { BaseAction } from './BaseAction';
import { FlattenJSONDocumenter } from '../documenters/FlattenJSONDocumenter';
import { ApiModel } from '@microsoft/api-extractor-model';
import { CommandLineStringParameter } from '@microsoft/ts-command-line';

export class FlattenJSONAction extends BaseAction {
  protected outputFileName: string;
  private _outputFileNameParameter: CommandLineStringParameter;

  constructor(parser: ApiDocumenterCommandLine) {
    super({
      actionName: 'flatten-json',
      summary: 'Generate documentation as JSON files (*.json)',
      documentation:
        'Generates API documentation as a collection of files in' +
        ' JSON format, suitable for example for further process into UI.'
    });
  }

  protected onDefineParameters(): void {
    // override
    super.onDefineParameters();

    this._outputFileNameParameter = this.defineStringParameter({
      parameterLongName: '--output-file-name',
      parameterShortName: '-n',
      argumentName: 'FILE1',
      description: `Output's file name. '[packageName.json] by default.'`
    });
  }

  // override
  protected onExecute(): Promise<void> {
    this.outputFileName = this._outputFileNameParameter.value || '';
    const apiModel: ApiModel = this.buildApiModel();
    const markdownDocumenter: FlattenJSONDocumenter = new FlattenJSONDocumenter(
      apiModel
    );
    markdownDocumenter.generateFiles({
      outputFolder: this.outputFolder,
      outputFileName: this.outputFileName
    });
    return Promise.resolve();
  }
}

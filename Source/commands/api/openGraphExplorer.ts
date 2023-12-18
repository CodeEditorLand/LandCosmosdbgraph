/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
	IActionContext,
	callWithTelemetryAndErrorHandling,
} from "vscode-azureextensionui";
import { ext } from "../../extensionVariables";
import { IGraphConfiguration } from "../../vscode-cosmosdbgraph.api";

export async function openGraphExplorer(
	config: IGraphConfiguration,
): Promise<void> {
	return await callWithTelemetryAndErrorHandling(
		"api.openGraphExplorer",
		async (_context: IActionContext) => {
			await ext.graphViewsManager.showGraphViewer(config);
		},
	);
}

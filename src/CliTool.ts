import {TaskAction} from "./Actions/TaskAction";

export class CliTool{
	private static instance: any;

	async activateAction(action: TaskAction, partialParts: string[]) {
		await action.doLogic(partialParts);
		if (action.errorStatus != null){
			console.error(action.getErrorText(action.errorStatus));
		}else{
			if (action.isGetAction) {
				console.table(action.result);
			}
		}
	}

	static getInstance() : CliTool{
		if (!CliTool.instance){
			CliTool.instance = new CliTool();
		}
		return CliTool.instance;
	}
}

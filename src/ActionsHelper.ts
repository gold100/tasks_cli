import {TaskAction} from "./Actions/TaskAction";


export async function activateAction(action: TaskAction, partialParts: string[]) {
	await action.doLogic(partialParts);
	if (!action.validationJson.isValid){
		console.error(action.getErrorText(action.validationJson.errorMessage));
	}else{
		if (action.isGetAction) {
			console.table(action.result);
		}
	}
}

import {TaskAction} from "./TaskAction";
import {ChangeMetaDataDTO} from "../Entities/ChangeMetaDataDTO";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";
import {putRequest} from "../Services/ServerManagerService";

export class UpdateTaskAction extends TaskAction{
    taskName: string;

    constructor() {
        super();
        this.isGetAction = false;
    }

    async childLogic(params: string[]) {
        this.taskName = params[0];
        let result = await putRequest('updateMetadata',
            new ChangeMetaDataDTO(this.taskName, params[1]));
        this.validationJson = result.data;
    }

    getErrorText(taskError: TaskErrorMessage) {
        switch (taskError){
            case TaskErrorMessage.TASK_NOT_EXISTS:
                return `The Task ${this.taskName} does not exist`;
            case TaskErrorMessage.UPDATE_COMPLETED_TASK:
                return `The Task ${this.taskName} is completed`;
        }
    }
}

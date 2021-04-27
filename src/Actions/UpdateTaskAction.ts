import {TaskAction} from "./TaskAction";
import {ServerManagerService} from "../ServerManagerService";
import {ChangeMetaDataDTO} from "../Entities/ChangeMetaDataDTO";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";

export class UpdateTaskAction extends TaskAction{
    taskName: string;

    constructor() {
        super();
        this.isGetAction = false;
    }

    async childLogic(params: string[]) {
        this.taskName = params[0];
        let result = await new ServerManagerService().postRequest('updateMetadata',
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
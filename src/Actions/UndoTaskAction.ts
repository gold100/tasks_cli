import {TaskAction} from "./TaskAction";
import {postRequest} from "../Services/ServerManagerService";
import {ChangeStausDTO} from "../Entities/ChangeStausDTO";
import {TaskStatus} from "../Entities/TaskStatus";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";

export class UndoTaskAction extends TaskAction{
    constructor() {
        super();
        this.isGetAction = false;
    }

    async childLogic(params: string[]) {
        this.taskName = params[0];
        let result =  await postRequest('changeStatus',
            new ChangeStausDTO(this.taskName, TaskStatus.Open));
        this.validationJson = result.data;
    }

    getErrorText(taskError: TaskErrorMessage) {
        switch (taskError){
            case TaskErrorMessage.TASK_NOT_EXISTS:
                return `The Task ${this.taskName} does not exist`;
            case TaskErrorMessage.UNDO_INCOMPLETE:
                return `The Task ${this.taskName} is already Open and cannot be undo`;
        }
    }
}

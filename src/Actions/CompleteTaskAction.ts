import {TaskAction} from "./TaskAction";
import {ServerManagerService} from "../ServerManagerService";
import {ChangeStausDTO} from "../Entities/ChangeStausDTO";
import {TaskStatus} from "../Entities/TaskStatus";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";

export class CompleteTaskAction extends TaskAction{
    constructor() {
        super();
        this.isGetAction = false;
    }

    async childLogic(params: string[]) {
        this.taskName = params[0];
        let result = await new ServerManagerService().postRequest('changeStatus',
            new ChangeStausDTO(params[0], TaskStatus.Completed));
        this.validationJson = result.data;
    }

    getErrorText(taskError: TaskErrorMessage) {
        switch (taskError){
            case TaskErrorMessage.TASK_NOT_EXISTS:
                return `The Task ${this.taskName} does not exist`;
            case TaskErrorMessage.UPDATE_COMPLETED_TASK:
                return `The Task ${this.taskName} is already completed`;
        }
    }
}

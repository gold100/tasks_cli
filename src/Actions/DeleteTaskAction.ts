import {TaskAction} from "./TaskAction";
import {ServerManagerService} from "../ServerManagerService";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";

export class DeleteTaskAction extends TaskAction{
    constructor() {
        super();
        this.isGetAction = false;
    }
    async childLogic(params: string[]) {
        let result = await new ServerManagerService().delete('', params[0]);
        this.validationJson = result.data;
    }

    getErrorText(taskError: TaskErrorMessage) {
        switch (taskError){
            case TaskErrorMessage.TASK_NOT_EXISTS:
                return `Error deleting task, The Task ${this.taskName} does not exist`;
        }
    }
}

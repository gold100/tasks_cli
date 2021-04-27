import {TaskAction} from "./TaskAction";
import {postRequest} from "../ServerManagerService";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";

export class DeleteTaskAction extends TaskAction{
    constructor() {
        super();
        this.isGetAction = false;
    }
    async childLogic(params: string[]) {
        this.taskName = params[0];
        let result = await postRequest('deleteTask', this.taskName);
        this.validationJson = result.data;
    }

    getErrorText(taskError: TaskErrorMessage) {
        switch (taskError){
            case TaskErrorMessage.TASK_NOT_EXISTS:
                return `Error deleting task, The Task ${this.taskName} does not exist`;
        }
    }
}

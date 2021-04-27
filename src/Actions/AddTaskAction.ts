import {TaskAction} from "./TaskAction";
import {postRequest} from "../ServerManagerService";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";

export class AddTaskAction extends TaskAction{
    taskName: string;

    constructor() {
        super();
        this.isGetAction = false;
    }

    async childLogic(params: string[]) {
        this.taskName = params[0];
        let result = await postRequest('create', this.taskName);
        this.validationJson = result.data;
    }

    getErrorText(taskError: TaskErrorMessage) {
        switch (taskError){
            case TaskErrorMessage.SAME_NAME_ERROR:
                return `The name ${this.taskName} is already taken`;
        }
    }
}

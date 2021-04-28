import {TaskAction} from "./TaskAction";
import {getRequest} from "../Services/ServerManagerService";
import {TaskStatus} from "../Entities/TaskStatus";
import {TaskErrorMessage} from "../Entities/TaskErrorMessage";
import {ValidationObject} from "../Entities/ValidationObject";

export class GetTaskAction extends TaskAction{
    constructor() {
        super();
        this.isGetAction = true;
    }

    async childLogic() {
        let data = await getRequest('');
        if (data.data.length > 0){
            this.result =  data.data.map(x =>
                Object.assign({Name: x.name, Completed: x.status == TaskStatus.Completed? '+' : '-'}));
        }else{
            this.validationJson = new ValidationObject(false, TaskErrorMessage.NO_TASKS);
        }
    }

    getErrorText(taskError: TaskErrorMessage) {
        switch (taskError){
            case TaskErrorMessage.NO_TASKS:
                return `There is no tasks`;
        }
    }
}

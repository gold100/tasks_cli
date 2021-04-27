import {TaskErrorMessage} from "../Entities/TaskErrorMessage";
import {ValidationObject} from "../Entities/ValidationObject";

export abstract class TaskAction {
    abstract childLogic(params?: string[]): any;
    isGetAction: boolean;
    validationJson: ValidationObject;
    result: any;
    taskName: string;
    abstract getErrorText(taskError: TaskErrorMessage);

    async doLogic(params?: string[]){
        this.validationJson = new ValidationObject(true, null);
        if (params && params.length > 0){
            await this.childLogic(params)
        }else{
            await this.childLogic();
        }
    }
}

import {TaskErrorMessage} from "../Entities/TaskErrorMessage";
import {ValidationObject} from "../Entities/ValidationObject";

export abstract class TaskAction {
    abstract childLogic(params?: string[]): any;
    isGetAction: boolean;
    errorStatus: TaskErrorMessage;
    validationJson: ValidationObject;
    result: any;
    taskName: string;
    abstract getErrorText(taskError: TaskErrorMessage);

    updateErrror(){
        if (!this.validationJson.isValid){
            this.errorStatus = this.validationJson.errorMessage;
        }
    }

    async doLogic(params?: string[]){
        this.validationJson = new ValidationObject(true, null);
        if (params && params.length > 0){
            await this.childLogic(params)
        }else{
            await this.childLogic();
        }

        this.updateErrror();
    }
}

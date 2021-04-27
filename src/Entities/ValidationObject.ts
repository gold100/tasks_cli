import {TaskErrorMessage} from "./TaskErrorMessage";

export class ValidationObject{
    isValid: boolean;
    errorMessage: TaskErrorMessage;


    constructor(isValid: boolean, errorMessage: TaskErrorMessage) {
        this.isValid = isValid;
        this.errorMessage = errorMessage;
    }
}

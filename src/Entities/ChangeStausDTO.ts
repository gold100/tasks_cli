import { TaskStatus } from './TaskStatus';

export class ChangeStausDTO{
  name: string;
  status: TaskStatus;


  constructor(name: string, status: TaskStatus) {
    this.name = name;
    this.status = status;
  }
}

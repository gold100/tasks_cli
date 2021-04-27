import { TaskStatus } from './TaskStatus';

export class Task{
  id: number;
  name: string;
  creationTime: Date;
  updateTime: Date;
  status: TaskStatus;
}

import {AddTaskAction} from "./Actions/AddTaskAction";
import {UpdateTaskAction} from "./Actions/UpdateTaskAction";
import {UndoTaskAction} from "./Actions/UndoTaskAction";
import {DeleteTaskAction} from "./Actions/DeleteTaskAction";
import {GetTaskAction} from "./Actions/GetTaskAction";
import {GetCompletedTaskAction} from "./Actions/GetCompletedTaskAction";
import {TaskAction} from "./Actions/TaskAction";
import {CompleteTaskAction} from "./Actions/CompleteTaskAction";

export class MessageParser{
	map: Map<string, TaskAction> = new Map<string, TaskAction>();
	private static instance: any;

	private constructor() {
		this.map.set('add-task', new AddTaskAction());
		this.map.set('update-task', new UpdateTaskAction());
		this.map.set('complete-task', new CompleteTaskAction());
		this.map.set('undo-task', new UndoTaskAction());
		this.map.set('delete-task', new DeleteTaskAction());
		this.map.set('list-tasks', new GetTaskAction());
		this.map.set('list-completed-tasks', new GetCompletedTaskAction());
	}

	async getAction(message: string) {
		let parts = message.split(' ');
		let actionString = parts[1];
		let action = this.map.get(actionString);
		parts.splice(0, 2);
		if (action){
			return {action: action, params: parts};
		}else {
			console.error('No Action Found in todos')
			return null;
		}
	}

	static getInstance() : MessageParser{
		if (!MessageParser.instance){
			MessageParser.instance = new MessageParser();
		}

		return MessageParser.instance;
	}
}

Task CLI Client

This program runs a command line interface for maniuplating tasks on a remote server.
The server details can be changes in a configuration file called config.json that exists on the root.

To run the client please run:

- npm install
- npm run start

Action list:

1. todo add-task "TASK NAME"

·       This command adds a new task to your list.

·       We cannot have tasks with the same name.

·       "TASK NAME" - STRING


2. todo update-task "TASK NAME" "NEW TASK NAME" 

·       This command updates a specific task in the list.

·       We cannot update a non-exist task.

·       We cannot update a completed task.

·       We cannot update a task to be completed/undo.

·       "TASK NAME" - STRING

·       "NEW TASK NAME" - STRING


3. todo complete-task "TASK NAME"

·       This command completes a specific task in the list (which means - updates the task state).

·       We cannot complete a non-exist task.

·       We cannot complete a completed task.

·       "TASK NAME" - STRING


4. todo undo-task "TASK NAME"

·       This command undo a specific task in the list (which means - updates the task state).

·       We cannot undo a non-exist task.

·       We cannot undo an in-completed task.

·       "TASK NAME" - STRING


5. todo delete-task "TASK NAME"

·       This command deletes a specific task from the list.

·       We cannot delete a non-exist task.

·       "TASK NAME" - STRING


6. todo list-tasks

·       List all tasks.


7. todo list-completed-tasks

·       List completed tasks only.

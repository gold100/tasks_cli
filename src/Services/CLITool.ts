import {MessageParser} from "./MessageParser";
import {activateAction} from "./ActionsHelper";
const readline = require('readline');

export class CLITool{
    readlineAddapter: any;

    constructor() {
        this.readlineAddapter = readline.createInterface(process.stdin, process.stdout);
    }

    startListening(){
        this.readlineAddapter.setPrompt('> ');
        this.readlineAddapter.prompt();
        const self = this;
        this.readlineAddapter.on('line', async function(line: string) {
            if (line.includes('todos')){
                let action = await MessageParser.getInstance().getAction(line);
                if (action) {
                    await activateAction(action.action, action.params);
                }
            }else{
                console.error('Unknown command: `' + line.trim() + '`');
            }
            self.readlineAddapter.prompt();
        }).on('close', function() {
            process.exit(0);
        });
    }
}

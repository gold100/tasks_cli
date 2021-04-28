import {MessageParser} from "./MessageParser";
import {activateAction} from "./ActionsHelper";

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
clear();

console.log(
    chalk.blueBright(
        figlet.textSync('Welcome To Todos CLI', { horizontalLayout: 'full' })
    )
);

rl.setPrompt('> ');
rl.prompt();

rl.on('line', async function(line: string) {
    if (line.includes('todos')){
        let action = await MessageParser.getInstance().getAction(line);
        if (action) {
            await activateAction(action.action, action.params);
        }
    }else{
        console.error('Say what? I might have heard `' + line.trim() + '`');
    }
    rl.prompt();
}).on('close', function() {
    process.exit(0);
});

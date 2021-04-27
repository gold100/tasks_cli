import {MessageParser} from "./MessageParser";

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

rl.on('line', function(line: string) {
    if (line.includes('todos')){
        MessageParser.getInstance().getAction(line);
    }else{
        console.error('Say what? I might have heard `' + line.trim() + '`');
    }
    rl.prompt();
}).on('close', function() {
    process.exit(0);
});
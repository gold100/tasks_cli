import {CLITool} from "./Services/CLITool";
const chalk = require('chalk');
const figlet = require('figlet');

console.log(
    chalk.blueBright(
        figlet.textSync('Welcome To Todos CLI', { horizontalLayout: 'full' })
    )
);

new CLITool().startListening();



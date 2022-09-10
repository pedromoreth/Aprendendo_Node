const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    { name: 'p1', message: 'Qual o seu nome?', },
    { name: 'p2', message: 'Qual a sua idade?', }

]).then((answers) => {
    console.log(`Meu nome é: ${chalk.bgYellow(answers.p1)}`);
    console.log(`Minha idade é: ${chalk.bgGray(answers.p2)}`);

}).catch(err => console.log(err));
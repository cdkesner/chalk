const chalk = require('chalk');
const log = console.log;
log(chalk.bgRed.bold("Hello ") + chalk.green("my name is") +  chalk.red(" Curtis Kesner."));
log(chalk.blue("This is a story about my dog ") + chalk.bgBlackBright("Monte."));
log(chalk.blue("My dog ") + chalk.bgBlackBright("Monte") + chalk.yellow(" is 11 years old and he is a black lab mix."));
log(chalk.blue("Monte loves ") + chalk.bgMagentaBright("treats") + chalk.blue(" and ") + 
chalk.bgMagentaBright("going for long walks") + chalk.blue(" through the neighborhood!"));

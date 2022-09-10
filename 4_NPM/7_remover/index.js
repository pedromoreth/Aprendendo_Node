const _ = require('lodash')
const chalk = require('chalk')
const a = [1, 2, 3, 4, 5]

const b = [10, 1, 8, 0, 6]

const diff = _.difference(a, b)

console.log(chalk.red.bold(diff))
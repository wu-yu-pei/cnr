const program = require('commander')
const addAction = require('./actions/add.js')
const removeAction = require('./actions/remove.js')
const checkAction = require('./actions/check.js')
const showAction = require('./actions/show.js')
const initAction = require('./actions/init.js')
const main = () => {
  program.command('c').description('check origin').action(checkAction)
  program
    .command('add <key> <value>')
    .description('add a origin')
    .action(addAction)
  program
    .command('remove <name>')
    .description('remove a origin')
    .action(removeAction)
  program.command('ls').description('show all origin').action(showAction)
  program
    .command('init')
    .description('node can use register? exec cnr init')
    .action(initAction)
}

module.exports = {
  main,
}

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const promptsStr = fs.readFileSync(
  path.join(__dirname, '../config/config.json'),
  {
    encoding: 'utf8',
  }
)
const prompts = JSON.parse(promptsStr)
const options = prompts[0].choices
const showAction = () => {
  if (options.length !== 0) {
    options.forEach((item) => {
      console.log(chalk.yellow(item.name))
    })
  } else {
    console.log(chalk.red('waring:'))
    console.log(
      chalk.red('no can use registry, please add registry self or'),
      chalk.blue('exec cnr init')
    )
  }
}
module.exports = showAction

const { commandSpawn } = require('../../utils/terminal.js')
const inquirer = require('inquirer')
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
function checkAction() {
  const using = options.find((item) => item.checked === true)
  console.log(chalk.blue(`  ${using.short} is using`))
  inquirer.prompt(prompts).then(async (res) => {
    const origin = res.features
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['config', 'set', 'registry', `${origin}`])
    console.log(chalk.blue('check success:', `${origin}`))

    options.forEach((item) => {
      if (item.value == origin) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
    fs.writeFileSync(
      path.resolve(__dirname, '../config/config.json'),
      JSON.stringify(prompts),
      {
        encoding: 'utf8',
        flags: '',
      }
    )
  })
}

module.exports = checkAction

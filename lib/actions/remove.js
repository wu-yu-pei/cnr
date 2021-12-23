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
let options = prompts[0].choices

const removeAction = (name) => {
  const target = options.find((item) => item.short === name)
  if (target) {
    let res = options.filter((item) => item.short !== name)
    prompts[0].choices = res
    // 写入文件
    fs.writeFileSync(
      path.resolve(__dirname, '../config/config.json'),
      JSON.stringify(prompts),
      {
        encoding: 'utf8',
        flags: '',
      }
    )
    console.log(chalk.blue('success:'))
    console.log(chalk.blue(`--${name} origin remove success`))
  } else {
    console.log(chalk.red('waring:'))
    console.log(chalk.red('--origin non-existent'))
  }
}
module.exports = removeAction

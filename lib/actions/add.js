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

const addAction = (key, value) => {
  if (options.find((item) => item.short === key)) {
    console.log(chalk.red('error:'))
    console.log(chalk.red(`--${key}origin already exists`))
  } else {
    // 添加
    options.push({
      name: `${key} ------- ${value}`,
      value: value,
      short: key,
      checked: false,
    })
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
    console.log(chalk.blue(`--${key} origin add success`))
  }
}
module.exports = addAction

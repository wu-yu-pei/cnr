const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const request = [
  {
    name: 'code',
    message: 'Are you sure init register?',
    pageSize: 10,
    type: 'list',
    choices: [
      {
        name: 'yes',
        value: 1,
        short: 'yes',
      },
      {
        name: 'no',
        value: 0,
        short: 'no',
      },
    ],
  },
]

const initAction = () => {
  inquirer.prompt(request).then((res) => {
    const { code } = res
    if (res) {
      optionStr = fs.readFileSync(
        path.resolve(__dirname, '../config/backups.json'),
        {
          encoding: 'utf8',
        }
      )

      fs.writeFileSync(
        path.resolve(__dirname, '../config/config.json'),
        JSON.stringify(JSON.parse(optionStr)),
        {
          encoding: 'utf8',
          flags: '',
        }
      )
    } else {
      process.exit(0)
    }
  })
}
module.exports = initAction

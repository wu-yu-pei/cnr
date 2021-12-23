const program = require('commander')
const helpOptions = () => {
  // 输入命令 wyp --version 就可以打印下面数据
  program.version(require('../package.json').version) //require()可以加载js  json等 并获取到最外面的对象 这样就可以做到动态加载版本号了

  // 添加自己的option     通过-h可以查看
  program.on('--help', function () {
    console.log('')
    console.log('How Use?')
    console.log('  check your like and Enter');
  })
}

module.exports = { helpOptions }

#! /usr/bin/env node
const program = require('commander')
const { helpOptions } = require('./lib/help.js')
const { main } = require('./lib/main.js')
// --help
helpOptions()

// main
main()

// node环境中进行 解析参数
program.parse(process.argv)

// 拿命令行里面的参数
const options = program.opts()

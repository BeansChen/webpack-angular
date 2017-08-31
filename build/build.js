process.env.NODE_ENV = 'production'

var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

webpack(webpackConfig, function(err, stats) {
	if(err) throw err
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}) + '\n\n')

	console.log(chalk.cyan('创建完成！\n'))
	console.log(chalk.yellow(
		'  提示: 文件已经创建完成并且服务已经启动\n' +
		'  打开 index.html 就可以开始工作了\n'
	))
})
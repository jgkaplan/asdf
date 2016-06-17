#!/usr/bin/env node --harmony
'use strict';

const chalk = require('chalk');
const keypress = require('keypress');

keypress(process.stdin);

let colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan, chalk.gray];
let currentColor = colors[Math.floor(Math.random()*colors.length)]

process.stdin.on('keypress', function(ch,key) {
	if (key && key.ctrl && key.name=='c'){
		process.stdin.pause();
	}
	console.log(colors[Math.floor(Math.random()*colors.length)](ch));
});

process.stdin.setRawMode(true);
process.stdin.resume();

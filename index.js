#!/usr/bin/env node --harmony
'use strict';

const chalk = require('chalk');
const keypress = require('keypress');

keypress(process.stdin);

let colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan, chalk.gray];
let currentColor = colors[Math.floor(Math.random()*colors.length)]

process.stdin.on('keypress', function(ch,key) {
	if (key){
		if ((key.ctrl && key.name=='c') || key.name=='escape'){
			process.stdin.pause();
		} else if (key.name=="return"){
			process.stdout.write('\n');
		}
	}
	process.stdout.write(colors[Math.floor(Math.random()*colors.length)](ch));
});

process.stdin.setRawMode(true);
process.stdin.resume();

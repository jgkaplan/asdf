#!/usr/bin/env node --harmony
'use strict';

const chalk = require('chalk');
const keypress = require('keypress');
const program  = require('commander');
const colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan, chalk.gray, chalk.white, chalk.black];
let type = process.argv.indexOf('-w')!=-1?'w':'l';
keypress(process.stdin);
function randomColor(){
	return colors[Math.floor(Math.random()*colors.length)]
}
let currentColor = randomColor();
program.option('-w, --word', 'Change color every word (default is every letter)').action(function() {}).parse(process.argv);
process.stdin.on('keypress', function(ch,key) {
	if (key){
		if ((key.ctrl && key.name=='c') || key.name=='escape'){
			process.stdin.pause();
		} else if (key.name=="return"){
			process.stdout.write('\n');
		} else if (key.name=='space'){
			currentColor = randomColor();
		} else if (key.name == 'backspace'){
            process.stdout.write('\b\x1b[K');
        }
	}
    if(ch){
        if (type == 'w'){
    		process.stdout.write(currentColor(ch));
    	}else{
    		process.stdout.write((randomColor())(ch));
    	}
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();

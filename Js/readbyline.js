const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
	input: fs.createReadStream('PathConfig.txt'),
	output: process.stdout,
	terminal: false
});

file.on('line', (line) => {
	console.log(line);
});

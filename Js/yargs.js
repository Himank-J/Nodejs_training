const yargs=require("yargs")
const fs = require('fs')
const argv=yargs.argv
const command=argv._[0]
const title=argv._[1]
const date=argv._[2]
const add = (title,date) => {
    const data = {"Title":title,"Date":date}
    fs.writeFileSync("./yargs.txt",JSON.stringify(data))
}

if(command==="add"){
    add(title,date)
}
/*yargs.command({
	command: 'add',
	describe: 'Adds two number',
	builder: {
		firstNumber: {
			describe: 'First Number',
			demandOption: true, 
			type: 'number'	
		},
		secondNumber: {
			describe: 'Second Number',
			demandOption: true,
			type: 'number'
		}
	},

	handler(argv) {
		console.log("Result:",
			(argv.firstNumber+argv.secondNumber))
	}
})

yargs.command({
	command: 'length',
	describe: 'Return length of input string',
	builder: {
		inputString: {
			describe: 'Input String',
			demandOption: true, 
			type: 'string'	
		}
	},
	handler(argv) {
		console.log("Result:",
			(argv.inputString.length))
	}
})

yargs.parse() */

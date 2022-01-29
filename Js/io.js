const fs = require("fs")
os=require("os")

const Systemconfig ={
    "Uptime":os.uptime(),
    "Type":os.type(),
    "Release":os.release(),
    "Total Memory":os.totalmem(),
    "Free Memory":os.freemem(),
}
const Pathconfig = {
    "Working Directory": __dirname, 
    "File Name": __filename
} 

fs.writeFileSync("SystemConfig.txt",JSON.stringify(Systemconfig))
let sysdata = fs.readFileSync("./SystemConfig.txt",'utf-8')
sysdata = JSON.parse(sysdata);
console.log(sysdata);

fs.writeFileSync("PathConfig.txt",JSON.stringify(Pathconfig))
let pathdata = fs.readFileSync("./PathConfig.txt",'utf-8')
pathdata = JSON.parse(pathdata);
console.log(pathdata);

fs.appendFileSync("./SystemConfig.txt",JSON.stringify(Pathconfig))
let data = fs.readFileSync("./SystemConfig.txt",'utf-8')
data = JSON.parse(data);
console.log(data);
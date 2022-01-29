var buff1 = Buffer.from('Himank    Vishal');
var buff2 = Buffer.from('Jain');
buff2.copy(buff1, 6, 0);
console.log(buff1.toString());

var slice = buff1.slice(0,10);
console.log(slice.toString());

console.log(buff1.toJSON())
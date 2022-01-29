//find
const ages = [10, 18, 20, 22, 24];

function checkAge(age) {
  return age > 18;
}
res1 = ages.find(checkAge);
console.log(res1)

//filter
res2 = ages.filter(checkAge);
console.log(res2)

//shift
res3 = ages.shift();
console.log(res3)

//unshift
ages.unshift(47,12);
console.log(ages)


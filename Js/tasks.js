//1 Write a function filterRange(arr, a, b)
let filterRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b))
} 
let arr = [10, 6, 7, 24];
let filtered = filterRange(arr, 7, 10);
alert(`Original Array is - ${arr}`); 
alert(`Array after filter - ${filtered}`); 
 
//2 Unique elements array
let uniqueElement = (array) => {
    return arr.filter((e,index) => (arr.indexOf(e) === index))
} 
let array = [10, 6, 7, 24, 6, 10];
let uniquelem = uniqueElement(array)
console.log(`Original Array is - ${array}`); 
console.log(`Unique elements of array - ${uniquelem}`);

//3 truncate string
let truncatestr = (str, maxlength) => {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

const str = "What I'd like to tell on this topic is:"
let truncatedstring = truncatestr(str,20)
console.log(truncatedstring)

//4 extract currency
let extractCurrencyValue = (str) => { return str.slice(1) }
val = extractCurrencyValue("$450")
console.log(val)
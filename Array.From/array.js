// Array.from()
// It's return a array

const stringArray = Array.from("hello");
console.log(stringArray); // [ 'h', 'e', 'l', 'l', 'o' ]
const arrayToArray = Array.from([1, 2, 3, 4]);
console.log(arrayToArray); //[ 1, 2, 3, 4 ]

const set = new Set([2, 4, 6, 8]);
console.log(set); //Set(4) { 2, 4, 6, 8 }
const objToArray = Array.from(set);
console.log(objToArray); // [ 2, 4, 6, 8 ]

Array.from("abcd", (x) => x.toLocaleUpperCase()); // second argument is a maping function
// it's return a ["A", "B", "C", "D"]
Array.from({length: 100}, (item, index) => index + 1)
// it's return 1 to 100 number sequence
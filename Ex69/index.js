// declare function with an array as the parameter
const sumArrElement = (arr) => arr.reduce((acc, cur) => acc + cur);

console.log(sumArrElement([1,2,3]));
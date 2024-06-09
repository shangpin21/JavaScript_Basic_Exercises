// declare function with an array as the parameter
// reverse the elements of array
const reverse = (arr) => arr.map((element, idx, array) => array[(arr.length - 1) - idx]);


console.log(reverse([1, 2, 3]));
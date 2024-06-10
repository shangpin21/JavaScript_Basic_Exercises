// declare function with an array as the parameter
// Check if first and last elements are the same
const chk = (arr) => {
    return (arr[0] == arr[arr.length-1]);
}

console.log(chk([1, 2, 1]));
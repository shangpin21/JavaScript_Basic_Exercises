// declare function with an array as the parameter
const chk = (arr) => {
    return (arr.length >= 1 && arr[0] == 1 || arr[arr.length-1] == 1);
}

console.log(chk([3, 1, 5]));
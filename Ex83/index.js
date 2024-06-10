// declare function with an array of strings

const longestString = (strArr) => {
    let max = strArr[0].length;
    strArr.map( v => max = Math.max(max, v.length)); // update max by finding the maximum length in the array
    result =  strArr.filter(v => v.length == max); // Filter string that have the maximum length
    return result;
}
   


console.log(longestString(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));
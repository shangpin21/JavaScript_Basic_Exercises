// declare function with a string as the parameter
function removeFirstLast(str, n){
    // extract first n charcters of the string
    first = str.substring(0,n);
    last = str.substring(str.length - n);

    return first + last;
}   

console.log(removeFirstLast("NewScript",3));
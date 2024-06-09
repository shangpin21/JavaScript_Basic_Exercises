// declare function with a string as the parameter
function removeFirstLast(str, n){
    // extract first n charcters of the string
    const first = str.substring(0,n);
    const last = str.substring(str.length - n);

    if (str.length >= n){
        return first + last;
    }else{
        return str;
    }

}   

console.log(removeFirstLast("NewScript",3));
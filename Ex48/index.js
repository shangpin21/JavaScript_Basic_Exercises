// declare function with a string as parameter
function reverse_String(str){
    // Split the string into an array of characters, reverse the order, and join them back into a string
    return str.split('').reverse().join('');
}

console.log(reverse_String("Welcome"));
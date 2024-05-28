// declare function with a string as parameter
function convert_str_alphabetically(str){
    // split string into an array of characters, sort the array and join it back into a string
    return str.split('').sort().join('');
}   

console.log(convert_str_alphabetically("Python"));
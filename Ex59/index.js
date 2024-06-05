// declare function with a string as parameter
function evenstring(str){
    // Check if str is even
    if(str.length % 2 != 0){
        return false;
    }
    else {
        // extract the first half of the string
        return str.substring(0, str.length / 2);
    }    
}   

console.log(evenstring("hello"));
// declare function with a string as parameter
function newstring(str){
    // Check if str more than 0 chracters
    if(str.length < 1){
        return false;
    }
    else {
        // extract the first half of the string
        return str.substring(1, str.length - 1);
    }    
}   

console.log(newstring("Hello"));
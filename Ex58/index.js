// declare function with a string as parameter
function newstring(str){
    // Check if str is more than 3 characters
    if(str.length < 3){
        return false;
    }
    else {
        // extract last 3 characters of string
        result_str = str.substring(str.length - 3);
        // return the copies of string 
        return result_str.repeat(4);
    }    
}   

console.log(newstring("hello"));
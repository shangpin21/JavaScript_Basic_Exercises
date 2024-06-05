// declare function with a given string and number of copies as parameter
function one_string(str, no_of_copies){
    // Check if n is less than 0
    if(no_of_copies < 0){
        return false;
    }
    else {
        // return the copies of given string 
        return str.repeat(no_of_copies);
    }    
}   

console.log(one_string("hello", 10));
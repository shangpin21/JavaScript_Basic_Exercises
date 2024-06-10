// declare function with a string as the parameter
function middle3(str){
    // Check if string is greater than or equal to 3 chracters
    if(str.length < 3){
        return false;
    }
    if(str.length % 2 == 0){
         // return middle 3 charcters
         return str.substring(str.length + 1 /2);
    }
    else {
        return false;
    }    
}   

console.log(middle3("Hello0"));
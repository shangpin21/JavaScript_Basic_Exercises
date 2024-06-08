// declare function with a string as the parameter
function moveLast3(str){
    // Check if string is greater than or equal to 3 chracters
    if(str.length < 3){
        return false;
    }
    else {
        // return last 3 chracters concatenated with substring excluding the last three characters
        return str.slice(-3) + str.slice(0, -3);
    }    
}   

console.log(moveLast3("Hello1"));
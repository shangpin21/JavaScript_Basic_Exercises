// declare function with a string as the parameter
function endScript(str){
    // Check if string is greater than or equal to 3 chracters
    if(str.length < 6){
        return false;
    }
    else {
        return str.substring(str.length - 6) == "Script"
    }
}   

console.log(endScript("JavaScript"));
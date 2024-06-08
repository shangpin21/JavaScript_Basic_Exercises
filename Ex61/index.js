// declare function with two string as parameters
function concatString(str1, str2){
    // Check if str more than 2 chracters
    if(str1.length < 2 && str2.length < 2){
        return false;
    }
    else {
        // save the string without the first character 
        str1 = str1.substring(1);
        str2 = str2.substring(1);
        return str1 + str2;
    }    
}   

console.log(concatString("Hello", "Bye"));
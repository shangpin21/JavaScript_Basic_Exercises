// declare function with a string as the parameter
function displayCity(str){
    // Check if string starts with "Los" or starts with "New" and return 
    return (str.substring(0, 3) == "Los" || str.substring(0, 3) == "New")    
}   

console.log(displayCity("NewScript"));
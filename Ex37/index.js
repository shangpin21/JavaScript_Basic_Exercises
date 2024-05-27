// declare function with a string as parameter
function first3characters_lowercase(str){
    // check if str length is more than 3
    if(str.length < 3){
        return str.toUpperCase();
    }

    // Create a variable named front_part and store the lowercase version of the first 3 chracters of the string
    front_part = (str.substring(0,3)).toLowerCase();

    // Create a variable named back part and store the uppercase version of the remaining characters in the string
    back_part = (str.substring(3, str.length));

    return front_part + back_part;
}

console.log(first3characters_lowercase("PYTHON"));


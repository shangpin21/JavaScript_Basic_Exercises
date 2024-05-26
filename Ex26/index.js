// define function with a given string as the parameters
function front_back3(str){
  // Check if string is more than or equals to 3 chracters
  if(str.length >= 3){
    // extract last 3 characters from the string and store it in a variable
    let last3 = str.substring(str.length - 3);
    // return string with last 3 characters at the front and back
    return last3 + str + last3;
  }else {
    // if string less than 3 characters
    return false;
  }
}

console.log(front_back3("Python"));
// define function with a string as the parameter
function addPy(string){
  // Check if str1 is null, undefined, or starts with the substring 'Py'
  if(string === null || string === undefined || string.substring(0,2) == "Py"){
    return string;
  }else{
    // If false, prepend 'Py' to str1 and return the result
    return "Py" + string;
  }
}

console.log(addPy("PyBye"));
// define function with a string as the parameters
function start_with_java(str){
  if (str.substring(0,4) != 'Java'){
    return false;
  }else{
    return true;
  }
}

console.log(start_with_java("Java223"));
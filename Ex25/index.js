// define function with a string and the position to remove character as the parameters
function multipleOf3or7(num){
  if (num % 3 == 0 || num % 7 == 0){
    return true;
  } else {
    return false;
  }
}

console.log(multipleOf3or7(14));
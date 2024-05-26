// declare function with two integer values as parameters
function in_range(x, y){
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
    return true;
  } else {
    return false;
  }
}

console.log(in_range(51,11));
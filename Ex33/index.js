// declare function with two integers as parameters
function check_in_range(x, y){
  // check if both number are in the range of 40...60 or 70...100 inclusive
  if((x >= 40  && x <=60  && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)){
    return true;
  } else {
    return false;
  }
}

console.log(check_in_range(40,54));
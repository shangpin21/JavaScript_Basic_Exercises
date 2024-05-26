// declare function with two integers as parameters
function find_largest(x, y){
  // Check if given integers are in the range of 40 to 60 inclusive
  if(x >= 40 && x <= 60 && y >= 40 && y <= 60){
    // set max value = 0
    let max_value = 0;
    // if x more than y
    if (x > y){
      // set max value = x
      max_value = x;
    }else {
      // else set max value = y
      max_value = y;
    }
    return max_value;
  } else {
    return false;
  }
}

console.log(find_largest(40,61));
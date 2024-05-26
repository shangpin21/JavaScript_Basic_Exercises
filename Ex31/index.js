// declare function with three integers as parameters
function find_largest(x, y, z){
  // Check if x or y or z is the largest

  // let max value  = 0
  let max_value = 0;
  // check if x is greater than y
  if (x > y) {
    max_value = x;
  } else {
    // If false, assign the value of y to max_value
    max_value = y;
  }

  // check if z is greater than max_value
  if (z > max_value){
    max_value = z;
  }

  return max_value;
}
console.log(find_largest(2,3,5));
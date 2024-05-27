// declare function with three positive integers as parameters
function check_lastDigit(x, y, z){
 if(x > 0 && y > 0 && z > 0){
  // Check if last digit is the same
  return x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10;
 } else {
  return false;
 }
}

console.log(check_lastDigit(1010,1000,1000));
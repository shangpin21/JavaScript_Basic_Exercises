// define function with parameter x
function testIntegerHundred(x){
    // Return true if the absolute difference between 100 and x is less than or equal to 20,
  // or the absolute difference between 400 and x is less than or equal to 20; otherwise, return false
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}
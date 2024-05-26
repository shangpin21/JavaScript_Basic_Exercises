// declare function with three integer values as parameters
function in_range(x, y, z){
  // Check if x or y or z is in range
 if( (x >= 50 && x <=99) || (y >= 50 && y <= 99) || (z >= 50 && z <=99)){
  return true;
 }else {
  return false;
 }
}

console.log(in_range(11,50,50));
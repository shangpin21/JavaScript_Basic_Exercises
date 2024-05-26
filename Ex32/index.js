// declare function with two integers as parameters
function nearest_hundred(x, y){
  // check if x is not equal to y
  if (x != y) {
    // calculate the absolute difference between x and 100, store it in x1
    x1 = Math.abs(x - 100);

    // calculate the absolute difference between y and 100, store it in y1
    y1 = Math.abs(y - 100);

    // Compare x1 and y1 to detenmine which value is closer to 100
    if(x1 > y1){
      return y;
    }

    // return x if y1 is greater than x1
    if(y1 > x1){
      return x;
    }

    // Return 0 if x and y are equidistant from 100
    return 0;
  } else {
    // return false if x is equal to y
    return false
  }
}

console.log(nearest_hundred(50,80));
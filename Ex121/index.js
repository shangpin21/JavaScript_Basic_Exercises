// declare function with a given integer as the parameter

const checkAPoint = (a, b, r, x, y) => {
  // Find the squared dist between the center of the circle and the given point
  let dist_points = (a - x) * (a - x) + (b - y) * (b - y);

  // find the squared radius
  r *= r;

  // check if (a,b) is inside a circle
  if(dist_points < r){
   return true;
  }
  return false;
}

console.log(checkAPoint(2,3, 6, 2,2));
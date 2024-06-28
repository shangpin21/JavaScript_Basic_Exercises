// declare function with (a,b) as the given point, r as radius and (x,y) as center of the circle as the parameters

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
// declare function with a given array of integers as the parameter

const increasingOrDecreasing = (arr) => {
  // if sequence has only one element is considered monotonous
  if (arr.length === 1){
    return true;
  }

  // calculate the direction of the sequence
  const arr_direction = arr[1] - arr[0];

  // check for monotonic behavior 
  for(let i = 0; i < arr.length-1; i++){
    // if the product of direction and the difference between elements is not positive, it's non-monotonic
    if(arr_direction * (arr[i + 1]- arr[i]) <= 0){
      return false;
    }
  }
  // if the loop completes the system is monotonic
  return true;
}

console.log(increasingOrDecreasing([1,2,2]));
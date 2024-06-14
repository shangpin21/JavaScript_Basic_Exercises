// Function with an array and a given number as the parameters
const different_values = (arr, n) => {
    let max_value = -1; // initializing max value as -1
    for(let i = 0; i < arr.length; i++){
      // nested loop for comparison with subsequent elements
      for(let j = i + 1; j < arr.length; j++){
        let x = Math.abs(arr[i] - arr[j]); // Calculating absolute difference
        if(x <= n){ // checking if absolute difference is smaller than n
          max_value = Math.max(max_value,x); // Updating the maximum value if the condition is met
        }
      }
    }
    return max_value; // Returning max value
}
  
console.log(different_values([12,10,33,34], 10));
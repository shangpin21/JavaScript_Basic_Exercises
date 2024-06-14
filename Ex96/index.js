// declare function with an array of integers as the parameters 

const abs_difference = (arr) => {
    let totalSum = 0; // initialize total sum to be 0
    // iterate through the array to find the diff of consecutive numbers
    for(let i = 0; i < arr.length - 1; i++){
        diff = Math.abs(arr[i] - arr[i + 1]);
        totalSum += diff; // sum up the difference 
    }
    return totalSum; // return total sum
};
   


console.log(abs_difference([1,4,5,9,16]));

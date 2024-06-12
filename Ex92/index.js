// declare function with an array of integers as the parameters 

const max_difference = (arr) => {
    let max = 0; 
    let temp;

    // Iterate through the array to calculate the difference between consecutive elements
    for (let i = 0; i< arr.length - 1; i++){
        temp = Math.abs(arr[i] - arr[i + 1]); // calculate the absolute difference
        max = Math.max(max, temp); // update the maximum difference
    }
    return max;
    
};
   


console.log(max_difference([1, 2, 3, 8, 9]));
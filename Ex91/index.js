// declare function with a given array of integers and a kth value as the parameters 

const array_max_consecutive_sum = (arr, k) => {
    let result = 0;
    let temp_sum = 0;

    // calculate the initial temporary sum for the first k-1 elements
    for(let i = 0; i < k - 1; i++){
        temp_sum += arr[i];
    }

    // Iterate through the array, updating the temporary sum and result
    for (let i = k - 1; i < arr.length; i++){
        temp_sum += arr[i];

        // update the result if the temporary sum is greater
        if(temp_sum > result) {
            result = temp_sum;
        }
        
        // Subtract the first element of the current k elements from the temporary sum
        temp_sum -= arr[i - k + 1];
    }
    return result;
};
   


console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2)); 
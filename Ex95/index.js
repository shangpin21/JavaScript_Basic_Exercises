// declare function with an array of integers as the parameters 

const replace_element = (arr, old_value, new_value) => {
    // iterate through the array 
    for(let i = 0; i < arr.length - 1; i++){
        // find if current array is equal to old value
        if(arr[i] == old_value){
            // replace with new value
            arr[i] = new_value;
        }
    }
    return arr; // return the modified array
};
   


console.log(replace_element([1,4,5,9,16], 4, 5));

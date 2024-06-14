// declare function with two given sorted arrays of integers as the parameter

const check_common_element = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        // Check if the current element from array 1 exists in array 2
        if(arr2.indexOf(arr1[i]) != -1){
            return true;
        }
    }
    return false; // if no common element is found return false
};
   


console.log(check_common_element([1,2,3],[3,4,5]));

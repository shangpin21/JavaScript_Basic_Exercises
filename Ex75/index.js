// declare function with an array(nums) as the parameter
// Create a new array and push the second element of each input array
const middle_elements = (arr1, arr2) => {
    const new_array = [arr1[1], arr2[1]];

    // return the new array
    return new_array;
};
   


console.log(middle_elements([1, 2, 3],[3,2,1]));
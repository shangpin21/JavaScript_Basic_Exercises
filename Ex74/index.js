// declare function with an array(nums) as the parameter
// Use the spread operator to create a copy of the array, then find the maximum value
const all_max = (nums) => {
    const max_val = Math.max(...nums);

    // return modified array
    return nums.fill(max_val);
};
   


console.log(all_max([1, 2, 3]));
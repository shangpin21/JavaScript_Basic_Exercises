// declare function with an array(nums) as the parameter
// create an array consisting of first and last element in the array
const firstLast = (nums) => {
    let array1 = [];
    array1.push(nums[0], nums[nums.length - 1]);

    // return the new array
    return array1;
};
   


console.log(firstLast([1,20,20,30]));
// declare function with an array(nums) as the parameter
// destructure array and swap first and last element
const swap = (nums) => {
    [nums[0], nums[nums.length -1]] = [nums[nums.length -1], nums[0]];
    return nums;
}
   


console.log(swap([30,2,3,1]));
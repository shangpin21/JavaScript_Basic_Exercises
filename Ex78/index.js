// declare function with an array(nums) as the parameter
// check if array does not contains integer 1 or 3
const doesNotContain1or3 = (nums) => {
    return nums.indexOf(1) === -1 && nums.indexOf(3) === -1;
};
   


console.log(doesNotContain1or3([0,2]));
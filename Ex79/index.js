// declare function with an array(nums) as the parameter
// check if array contains integer 30 or 40 twice
const checkTwice = ([a,b]) => 
    (a === 30 && b === 30) || (a === 40 && b === 40);
   


console.log(checkTwice([30,30]));
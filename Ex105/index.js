// declare function with a given integer as the parameter

// Function to calculate the sum of digits
const digitSum = (num) => {
    let digit_sum = 0; // initialize the sum of digits
    while(num){
      digit_sum += num % 10; // get the last digit and sum them up
      num = Math.floor(num / 10); // remove the last digit from the number
    }
    return digit_sum;
  };

const digit_to_one = (num) => {
  let result = 0; // initialize count of steps to convert number
  while (num >= 10){ // Loop until the number becomes single digit
    result += 1; // increment the step count
    num = digitSum(num); 
  }
  return result;
};

  

console.log(digit_to_one(123));
console.log(digit_to_one(156));
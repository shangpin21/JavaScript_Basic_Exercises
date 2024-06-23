// declare function with a number num as the parameter

const int_sum = (num) => {
  let s_sum = 0; // Initialize the sum variable
  while (num > 0) { // Loop until num is greater than 0
    s_sum += num; // Add num to the sum
    num = Math.floor(num / 2); // Divide num by 2 using Floor division
  }
  return s_sum; // Return the sum of integers from 1 to num
}
console.log(int_sum(8));
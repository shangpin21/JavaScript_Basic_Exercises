// declare function with a number n (factorial) as the parameter

const trailing_zeros = (n) => {
  let result = 0;
  for(let i = 5; i <= n; i += 5){ // Loop to calculate factorial
    let num = i; // Store the current number
    while (num % 5 == 0) { // Check if the number is divisible by 5
      num /= 5; 
      result++; // Increment the count of trailing zeros
    }
  }
  return result; // Return the total count of trailing zeros in the factorial of n
}
console.log(trailing_zeros(8));
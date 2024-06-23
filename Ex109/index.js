// declare function with n as the parameters

const sortPrime = (n) => { // declare the sequence of prime numbers you want to include from 1 to n
  let prime_num1 = [], // Array to store prime numbers
      prime_num2 = []; // Array to track prime number status
  
  // initialize all entries as true from between 1 to n
  for(i = 0; i <= n; i++){
    prime_num2.push(true);
  }

  // Check if it is a prime number using Sieve of Eratosthenes algorithmn
  for(i = 2; i <= n; i++){
    if(prime_num2[i] == true){
      prime_num1.push(i); // Push the prime number to array prime_num1
    }
    // Mark all multiples of the current prime numbers as false
    for(let j = 1; i * j <= n; j++){
      prime_num2[i * j] = false;
    }

  }
  return prime_num1;
}

console.log(sortPrime(5));
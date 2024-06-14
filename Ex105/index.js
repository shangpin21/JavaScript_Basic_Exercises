// declare function with a given string as the parameter

const build_Palindrome = (str) => {
    let flag;  // Variable to check if a palindrome is found
    for (let i = str.length;; i++) {  // Infinite loop starting from the length of the input string
      flag = true;  // Reset the flag for each iteration
      for (let j = 0; j < i - j - 1; j++) {
        // Check if the characters symmetrically positioned around the center are equal
        if (i - j - 1 < str.length && str[j] !== str[i - j - 1]) {
          flag = false;  // Set the flag to false if not equal
          break;  // Break the inner loop
        }
      }
      if (flag) {
        // If a palindrome is found, complete the palindrome by adding the remaining characters
        for (let j = str.length; j < i; j++) {
          str += str[i - j - 1];
        }
        return str;  // Return the palindrome
      }
    }
  }
  
console.log(build_Palindrome("abcddc"));  // Example usage
console.log(build_Palindrome("122"));  // Example usage


// Function to build a palindrome from a given string
const build_Palindrome = (new_str) => {
    let flag;  // Variable to check if a palindrome is found
    for (let i = new_str.length;; i++) {  // Infinite loop starting from the length of the input string
      flag = true;  // Reset the flag for each iteration
      for (let j = 0; j < i - j - 1; j++) {
        // Check if the characters symmetrically positioned around the center are equal
        if (i - j - 1 < new_str.length && new_str[j] !== new_str[i - j - 1]) {
          flag = false;  // Set the flag to false if not equal
          break;  // Break the inner loop
        }
      }
      if (flag) {
        // If a palindrome is found, complete the palindrome by adding the remaining characters
        for (let j = new_str.length; j < i; j++) {
          new_str += new_str[i - j - 1];
        }
        return new_str;  // Return the palindrome
      }
    }
  }
  
  console.log(build_Palindrome("abcddc"));  // Example usage
  console.log(build_Palindrome("122"));  // Example usage
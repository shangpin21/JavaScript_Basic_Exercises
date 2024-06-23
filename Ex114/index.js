// declare function with a string as the parameter

const isSentence = (str) => {
  let first_char = str[0]; // Get first Character
  let last_char = str[str.length - 1]; // Get last character
  return /[A-Z]/.test(first_char) && last_char == "."; 
}
console.log(isSentence("This tool will help you write better."));
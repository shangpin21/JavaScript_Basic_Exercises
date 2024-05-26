// declare function with a given string and specified character as parameters
function check_character(str,char){
  // initialize a counter varaible to 0
 let ctr = 0;

  // Use a for loop to iterate through each character in the string
  for(let i = 0; i < str.length; i++){
    if((str.charAt(i) == char) && ( i >= 1 && i <= 3))
      {
        // set counter to 1 and break out of the loop
        ctr = 1;
        break;
      }
  }

  // Check if the counter is 1 and return true, otherwise return false
  if(ctr == 1) return true;
  return false;

}

console.log(check_character("Python","n"));
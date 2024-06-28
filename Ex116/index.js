// declare function with a string as the parameter

const replace_hash = (str) => {
   let str_arr = str.split(''),
   hash_pos = -1, // default hash pos
   left = '0'.charCodeAt(), // ASCII code of 0
   right = '9'.charCodeAt(), // ASCII code of 9
   result = [], // array to store the sum of numbers
   sum = 0;
  // loop through characters in the string array
   for(let i = 0; i < str_arr.length; i++){
    if(left <= str_arr[i].charCodeAt() && str_arr[i].charCodeAt() <= right){
      sum += str_arr[i].charCodeAt() - left; // calculate if character is # or digit then sum it up
    }else{
      hash_pos = i;
    }
   }

  // loop through numbers 0 to 9 to replace '#' with digits making the number divisible by 3
  for(let i = 0; i < 10; i++){
    if((sum + i) % 3 == 0){
      str_arr[hash_pos] = String.fromCharCode(left + i); // replace # with new digit
      result.push(str_arr.join(''));
    }
  }
  return result;
}
console.log(replace_hash("2#0"));
console.log(replace_hash("3#5"));

// define function with a string and the position to remove character as the parameters
function remove_character(string, pos){
  // Split string into array
  let stringArr = string.split('');
  // remove specified character
  stringArr.splice(pos,1);
  // concatenating all remaining elements in the array
  stringArr = stringArr.join('');
  return stringArr;
}

console.log(remove_character("Python", 2));
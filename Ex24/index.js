// define function with a string and the position to remove character as the parameters
function changeFirstandLast(str){
  if (str.length < 1){
    return "String length must be more than or equals to 1"
  } else {
    let strArr = str.split(''); // split string into an array
    let firstChar = strArr.shift(); // remove first chracter and store it in a variable
    let lastChar = strArr.pop(); // remove last character and store it in a variable
    strArr.unshift(lastChar); // add the last character to the front 
    strArr.push(firstChar); // add the first character to the end
    return strArr.join(''); // join the array back into a string
  } 
}

console.log(changeFirstandLast("Python"));
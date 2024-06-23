// declare function with a given integer as the parameter

const arr_pairs = (arr) => {
  let result = 0;
  let strResult = "";
  let str = [];
  // Iterate loop to check each element
  for(let i = 0; i < arr.length; i++){
    // Iterate inner loop to check id either element is a multiple of the other
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0){
          result++;
          str.push(`(${arr[i]}, ${arr[j]})`);
        }
    }
  }
  strResult = str.join(", ") + '.';
  return result + "-" + strResult; // Return the total count of pairs
};

console.log(arr_pairs([1,2,3]));
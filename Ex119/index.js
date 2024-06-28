// declare function with a given integer as the parameter

const isIncreasingDigit = (x) => {
   let arr_num = (x + '').split(''); // convert to string then put in an array
   // loop through array of digits
   for(let i = 0; i < arr_num.length; i++){
      if(parseInt(arr_num[i]) >= parseInt(arr_num[i + 1])){
         return false;
      }
   }
   return true;
}

console.log(isIncreasingDigit(124));
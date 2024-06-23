// declare function with an array and n(given number) as the parameters

const evenNumCount = (arr, n) => {
  let count = 0;
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] % 2 == 0 && arr[i] !== n){
      count++;
    }
    if(arr[i] == n){
      return count;
    }
  }
  return -1;
}
console.log(evenNumCount([1,2,3,4,5,6,7,8,9,10],5))
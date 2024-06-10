// declare function with an array of numbers as the parameter 

const alternate_Sums = (Arr) => {
    let result = [0, 0]; // initialize an array to store the alternate sums [sum1, sum2]
    for(let i = 0; i < Arr.length; i++){
        if(i % 2) result[1] += Arr[i]; // If the index is odd, add the element to the second sum
        else
        result[0] += Arr[i]; // If the index is even, add element to the first sum
    }
    return result;
}
   


console.log(alternate_Sums([1,3,6,2,5,10]));
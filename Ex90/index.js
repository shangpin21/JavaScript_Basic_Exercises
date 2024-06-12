// declare function with a given array of integers and the Kth value as the parameters 

const kthGreatestElement = (arr, k) => {
    // sort array in descending 
    arr.sort((a,b) => b - a);
    // return kth element
    return arr[k-1];
};
   


console.log(kthGreatestElement([1,2,6,4,5], 3));
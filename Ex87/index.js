// declare function with an array of numbers as the parameter 

const arrayCheck = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        for(let j = i; j < arr1.length; j++){
            // Swap elements to create different combinations
            let result = true;
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;

            // Check if the current combination is equal to the second array
            for(let k = 0; k < arr1.length; k++){
                if(arr1[k] !== arr2[k]) {
                    result = false;
                    break;
                }
            }

            // If combination matches, return true
            if (result) {
                return true;
            }

            // Swap elements back to their original positions
            arr1[j] = arr1[i];
            arr1[i] = temp;
        }
    }
    // If no matching combination is found
    return false;
};
   


console.log(arrayCheck([10, 20, 30, 40], [10, 20, 40, 30]));
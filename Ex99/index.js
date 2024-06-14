// declare function with a two given strings as the parameters

const rearrangement_characters = (str1, str2) => {
    // Splitting both strings into arrays of characters
    let first_set = str1.split(''); // Array from first string
    let second_set = str2.split(''); // Array from second string
    let result = true; // initializing result as true

    // Sort both arrays
    first_set.sort();
    second_set.sort();

    // Iterate through loop 
    for(let i = 0; i < Math.max(first_set.length, second_set.length); i++){
        // check if position of charcters are the same
        if(first_set[i] !== second_set[i]){
            result = false;
        }
    }
    return result;
};
   


console.log(rearrangement_characters("zyx", "xyz"));

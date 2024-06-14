// declare function with a given string as the parameter

const digit_delete = (num) => {
    let result = 0, // variable to store maximum resulting number
    num_digits = []; // Array to store individual digits of the number

    // Extract digits of the number and store them in an array
    while(num){
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    // Iterate through each digit and generate numbers after deleting each digit
    for(let i = 0; i < num_digits.length; i++){
        let temp = 0; // Temporary variable to store generated number

        // Create a new number without the current indexed digit
        for(let j = num_digits.length - 1; j >= 0; j--){
            if(j !== i) {
                temp = temp * 10 + num_digits[j];
            }
        }

        // Store the maximum number obtained after deleting each digit
        result = Math.max(temp, result);
    }

    return result;
};
   


console.log(digit_delete(123));

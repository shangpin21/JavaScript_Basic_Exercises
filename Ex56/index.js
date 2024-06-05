// declare function with two positive numbers as parameter
function divide_two(x, y){
    // Check if divisor is 0
    if(y == 0){
        return "Cannot be divided by zero.";
    }
    // perform division
    let result = x / y;
    // format result with commas
    let formattedResult = result.toLocaleString(undefined, {maximumFractionDigits: 2});
    // Return the formatted result
    return formattedResult;
}   

console.log(divide_two(1000000000,107));
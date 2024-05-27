// declare function with two integers as parameters
function check_twonumbers(x, y){
    // Check if the negation of the condition is true
    if (!((x % 7 == 0 || x % 11 == 0) && (y % 7 == 0 || y % 11 == 0))) {
        // Return true if either a is divisible by 7 or 11, or b is divisible by 7 or 11
        return ((x % 7 == 0 || x % 11 == 0) || (y % 7 == 0 || y % 11 == 0));
    } 
    else {
        // If the negation of the condition is false, return false
        return false;
    }
}

console.log(check_twonumbers(44,36));
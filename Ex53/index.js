// declare function with a string as parameter
function ab_check(str){
    // Use regular expression to check if the given patter a..b or b..a exists in the given string
    // The test method return true if the pattern is found otherwise it returns false.
    return (/a...b/).test(str) || (/b...a/).test(str);
}   

console.log(ab_check("Chainsbreaker"));
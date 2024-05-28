// declare function with a string as parameter
function count_vowels(str){
    // Use regular expression to replace all characters not in 'aeiou' with an empty string
    // and get the length of the resulting string, which is the count of vowels
    return str.replace(/[^aeiou]/g, "").length;
}   

console.log(count_vowels("McDonalds"));
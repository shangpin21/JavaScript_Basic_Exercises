// declare function with a string as parameter
function cap_firstLetter(str){
    // Split the string into an array of characters
    let s = str.split(' ');

    // Iterate through each char in the array
    for(let i = 0; i < s.length; i++){
        // capitalize first letter of each word
        s[i] = s[i][0].toUpperCase() + s[i].substring(1);
    }

    // Join the modified characters back into a string and return the result
    return s.join(' ');
}

console.log(cap_firstLetter("Welcome to my house"));
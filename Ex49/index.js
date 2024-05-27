// declare function with a string as parameter
function replace_char(str){
    // Split the string into an array of characters
    let s = str.split('');

    // Iterate through each char in the array
    for(let i = 0; i < s.length; i++){
        // Caesar cipher: Shift each character by one position in the alphabet
        switch(s[i]) {
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
                break;
            default:
                // add one to the character code to get the next character 
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0))
        }
    }

    // Join the modified characters back into a string and return the result
    return s.join('');
}

console.log(replace_char("Welcome"));
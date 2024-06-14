// declare function with a given string as the parameter

const isLatin = (str) => {
    // Check if string contains start with a letter a-z and can be followed by any characters
    let result = (/^[a-z].*$/i).test(str);
    // Check if string contains two consecutive upper case letter
    let result1 = (/^.*[A-Z][A-Z].*$/).test(str);
    // Check if String contains two consecutive lowercase letter
    let result2 = (/^.*[a-z][a-z].*$/).test(str);
    if (result && !result1 && !result2) {
    return true;
    }
    return false;
};
   


console.log(isLatin('xYr'));
console.log(isLatin('XxX'));


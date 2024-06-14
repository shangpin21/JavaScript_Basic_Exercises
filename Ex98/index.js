// declare function with a given string as the parameter

const change_case = (str) => {
    let x = 0; // count number of uppercase characters
    let y = 0; // count number of lowercase characters
    
    for(let i = 0; i < str.length; i++){
        if(/[A-Z]/.test(str[i])) {
            x++; // increment count of uppercase characters
        } else {
            y++; // increment count of lowercase characters
        }
    }

    // if count of lowercase characters is higher than uppercase characters, convert the string to lowercase
    if(y > x){
        return str.toLowerCase();
    }else{
        return str.toUpperCase();
    }
};
   


console.log(change_case("Write"));

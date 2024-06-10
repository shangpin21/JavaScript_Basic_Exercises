// declare function with a two digit number as the parameter

const addtwoDigits = (num) => {
    if(num > 99){
        return false;
    } else {
        // add first digit and last digit
        return num % 10 + Math.floor(num / 10);
    }
}
   


console.log(addtwoDigits(199));
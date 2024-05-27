// declare function with three integers as parameters
function strict_or_soft(x, y, z){
    // check if y is bigger than x and z is bigger than y
    if(y > x && z > y){
        return "Strict mode";
    // if not check if z is bigger than y and return soft mode if it is true or undefined if it is false
    } else {
        return z > y ? "Soft mode" : "Undefined";
    }
}

console.log(strict_or_soft(10,10,23))
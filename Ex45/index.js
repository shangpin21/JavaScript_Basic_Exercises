// declare function with two integers as parameters
function check_twonumbers(x, y){
    // check two integer values and returns true if either one is 15 or if their sum or difference is 15.  
    return x == 15 || y == 15 || x + y == 15 || x - y == 15 || y - x == 15;
}

console.log(check_twonumbers(45,30));
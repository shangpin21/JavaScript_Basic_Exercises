// declare function with two integers as parameters
function check8(x, y){
    // check whether one of them is 8 or their sum or difference is 8
    return(x == 8 || y == 8 || x + y == 8 || x - y == 8 || y - x == 8);
}

console.log(check8(50,58));
// declare function with three integers as parameters
function check_threenumbers(x, y, z){
    // check if three numbers have the same last digit
    return x % 10 == y % 10 || y % 10 == z % 10 || x % 10 == z % 10;
}

console.log(check_threenumbers(20,20,20));
// declare function with three integers as parameters
function check_threenumbers(x, y, z){
    // check if ny one of them is greater than or equal to 20 and less than at least one of the other two
    return((x >= 20 && (x < y || x < z))
        || (y >= 20 && (y < z || y < x)) 
        || (z >= 20 && (z < y || z < x)));
}

console.log(check_threenumbers(20,21,20));
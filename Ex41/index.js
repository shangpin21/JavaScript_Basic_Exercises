// declare function with three integers as parameters
function check_threenumbers(x, y, z){
    // check if three numbers are the same
    if(x == y && y == z){
        return 30;
    // check if two numbers are the same
    }else if (x == y || y == z || x == z){
        return 40;
    // else return 20
    }else { 
        return 20;
    }
}

console.log(check_threenumbers(20,20,20));
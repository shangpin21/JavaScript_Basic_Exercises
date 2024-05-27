// declare function with two integers as parameters
function sum(x, y){
    // check if sum is in the range of 50 to 80
    if(x + y >= 50 && x + y <= 80){
        return 65;
    }else {
        return 80;
    }
}

console.log(sum(50,10));
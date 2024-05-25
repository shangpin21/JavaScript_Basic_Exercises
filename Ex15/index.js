// Define a function that takes the parameter x
function difference(x){
    // Check if x is greater than 13
    if(x > 13){
        return (x-13) * 2;
        // If true, return the double of the difference between n and 13
    }else{
        // If false, return the difference between 13 and x
        return 13 - x;
    }
}

console.log(difference(32));
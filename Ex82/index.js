// declare function with two positive integers as the parameters

const addtwoNum = (n1, n2) => {
    if(n1 < 0 || n2 < 0){
        return false;
    } else {
        // add first number and second number
        let result = 0;
        let x = 1; // place value

        // continue until both numbers become 0
        while (n1 > 0 && n2 > 0){
            // Add the sum of the last digits multiplies by the current place value to the result
            result += x * ((n1 + n2) % 10);

            n1 = Math.floor(n1 / 10);
            n2 = Math.floor(n2 / 10);

            x *= 10;
        }
        return result;
    }
}
   


console.log(addtwoNum(199,299));
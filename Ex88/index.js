// declare function with two integers and a divisor as the parameters 

const similarIntegers = (n1, n2, div) => {
    // check if both integers are divisible or not divisible by the divisor
    return (n1 % div == 0 && n2 % div == 0 || n1 % div !== 0 && n2 % div !== 0);
};
   


console.log(similarIntegers(10, 25, 13));
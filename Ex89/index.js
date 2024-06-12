// declare function with three integers as the parameters 

const checkArithmeticExpressions = (n1, n2, n3) => {
    if(n1 + n2 == n3){
        return true;
    }else if(n1 / n2 == n3){
        return true;
    }else if(n1 - n2 == n3){
        return true;
    }else if(n1 * n2 == n3){
        return true;
    }else{
        return false;
    }
};
   


console.log(checkArithmeticExpressions(10,5,2));
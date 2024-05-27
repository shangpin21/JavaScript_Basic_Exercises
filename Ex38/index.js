// declare function with score and is_exam to determine if paper is final exam as parameter
function grade(score, is_exam){
    // check if exam is true
    if(is_exam){
        // return true if total marks is greater than or equal to 90
        return score >= 90;
    }

    // Return true if total marks is between 89 and 100(inclusive)
    return score >= 89 && score <=100;
}

console.log(grade(89,true));
// declare function with a angle as the parameter 

const findAngles = (angle) => {
    if(angle < 90){
        return "Acute angle";
    }
    if(angle === 90) {
        return "Right angle";
    }
    if(angle < 180) {
        return "Obtuse angle";
    }
    return "Straight angle";
};
   


console.log(findAngles(90));
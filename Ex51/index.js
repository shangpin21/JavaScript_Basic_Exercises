// declare function with a seconds as parameter
function convert_hours_mins(seconds){
    // convert seconds to hours and minutes
    let mins  = Math.floor(seconds / 60);
    let hours = Math.floor(mins / 60);
    // return results
    return `Hours : ${hours} Minutes : ${mins}`;
}

console.log(convert_hours_mins(300));
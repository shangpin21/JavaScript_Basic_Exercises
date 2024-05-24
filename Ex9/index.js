// Create Date Object

// to create specific date
// const time = new Date(year, month, day, hours, minutes, seconds, milliseconds);

function days_before_chrismas(){
    const current_time = new Date();
    const chrismas = new Date(current_time.getFullYear(), 11, 25);
    if(current_time.getMonth() == 11 && current_time.getDate() == 25){
        chrismas.setFullYear(chrismas.getFullYear()+ 1)
    }
    return Math.ceil((chrismas - current_time)/8.64e+7);
}


console.log(days_before_chrismas());
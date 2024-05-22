const currentDate = new Date();

const dayOfWeek = currentDate.getDay();

const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var currentTimeHrs = currentDate.getHours();

var currentTimeMinutes = currentDate.getMinutes();

var currentTimeSeconds = currentDate.getSeconds();

// Determine if it's AM or PM
var prepand = (currentTimeHrs >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
currentTimeHrs = (currentTimeHrs >= 12) ? currentTimeHrs - 12 : currentTimeHrs;


// Check for special cases during Noon
if(currentTimeHrs === 0 && prepand === " PM ") {
    if(currentTimeMinutes === 0 && currentTimeSeconds === 0){
        currentTimeHrs = 12;
        prepand = " Noon ";
    } else {
        currentTimeHrs = 12;
        prepand = " PM ";
    }
}

// Check for cases during Midnight
if(currentTimeHrs === 0 && prepand === " AM "){
    if(currentTimeMinutes === 0 && currentTimeSeconds === 0){
        currentTimeHrs = 12;
        prepand = " Midnight ";
    } else {
        currentTimeHrs = 12;
        prepand = " AM ";
    }
}
console.log(`Sample Output: Today is: ${daysOfWeek[dayOfWeek]}`);

console.log(`Current time is : ${currentTimeHrs} ${prepand} : ${currentTimeMinutes} : ${currentTimeSeconds}`);
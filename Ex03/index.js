const currentDate = new Date();

var currentMonth = currentDate.getMonth() + 1;

var date = currentDate.getDate();

var currentYear = currentDate.getFullYear();

// add 0 at the front of the month if it is sigle digit
if(currentMonth <= 9) {
    currentMonth = "0" + currentMonth;
} 

console.log(`${currentMonth}-${date}-${currentYear}`)
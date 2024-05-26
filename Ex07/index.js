// Logic:
// 7 days in a week, January 1st of a year is a particular day
// January 1st of the next year will be one day later in the week
// If it is a leap year it will be two days later

// Function to check leap year
function is_leapyear(year){
    return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);
}

// Start from 2014 1st January we know that it is a Wednesday

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Solution without using Date Object
function is_sunday(){
    let start = 3;
    for(let i = 2014; i <= 2050; i++){
        let day = daysOfWeek[start % 7];
        if(is_leapyear(i)){
            start += 2;
            if(day == "Sunday"){
                console.log(`${i} January 1st is a Sunday`); }  
        } else {
            start++;
            if(day == "Sunday"){
                console.log(`${i} January 1st is a Sunday`); } 
        }
    }
}

// Solution With Date Object

for (let year = 2014; year <= 2050; year++)
    {
        var d = new Date(year,0,1);
        if(d.getDay() === 0)
            console.log(year + " 1st January is a Sunday");
    }

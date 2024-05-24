// Leap year Rule:
// 1. Divisible by 100 (must also be divisible by 400)
// 2. Not Divisible by 100 (but divisible by 4)


function is_leapyear(year){
    return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);
}

console.log(is_leapyear(2024));
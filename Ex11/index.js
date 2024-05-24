// Celsius to Farenheit

function Celsius_to_F(x){
    let f = ((x/5) * 9) + 32;
    return `${x}°C is ${f}°F`;
}

console.log(Celsius_to_F(60));

function Farenheit_to_C(x){
    let c = ((x-32)/9) * 5
    return `${x}°F is ${c}°C`
}

console.log(Farenheit_to_C(45));
const input_number = prompt("Guess a number from 1 to 10");
// Generate a random number from 1 to 10 inclusive
const random_no = Math.floor(Math.random() * 10) + 1;

if(input_number == random_no) {
    alert(`Generated Number: ${random_no}\nGood Work!! You have guessed the right number.`)
} else {
    alert(`Generated Number: ${random_no}\nNumber not matched.`)
}
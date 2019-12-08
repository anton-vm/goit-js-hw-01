let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Enter the number")
 if (Number.isNaN(Number(input)) === true) {
     alert("Enter correct number")
 }
  else {
      if (input !== null) {
    numbers.push(Number(input)) }}
} while (input !== null)



for (let digit of numbers) {
    total = total + digit
}
alert(total)
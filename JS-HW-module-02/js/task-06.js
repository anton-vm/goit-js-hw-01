let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Enter the number")
 if (Number.isNaN(Number(input)) === true) {
     alert("Enter correct number")
     continue
 }
    if (input !== null) {
    numbers.push(Number(input)) }
} while (input !== null)


if (numbers.length === 0) {
    total = "You didn't add any number"
} else {
for (let digit of numbers) {
    total = total + digit
}}
alert(total)
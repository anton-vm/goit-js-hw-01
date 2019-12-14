let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Enter the number")
 if (Number.isNaN(Number(input))) {
     alert("Enter correct number")
     continue
 }
    if (input !== null) {
    numbers.push(Number(input)) }
} while (input !== null)


if (numbers.length) {
for (let digit of numbers) {
    total += digit
}alert(total)}

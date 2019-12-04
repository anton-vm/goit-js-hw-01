let input;
let total = 0;

do {
  input = prompt("Введите число");
  const inputNumber = Number(input);
  if (Number.isNaN(inputNumber)) {
    alert("Ошибка, запишите число");
  } else {
    total = inputNumber + total;
  }
} while (input !== null)


alert(`Общая сумма чисел равна ${total}`);
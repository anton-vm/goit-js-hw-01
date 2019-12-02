let input;
let total = 0;


while (true) {
  input = prompt("Введите число");

  if (input === null) {
    break;
  }
  const inputNumber = Number(input);

  if (Number.isNaN(inputNumber)) {
    alert("Error");
  } else {
    total = inputNumber + total;
  }
}

alert(`Общая сумма чисел равна ${total}`);

const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let rest;

const request = prompt("Введите количество дроидов, которые хотите купить");

if (request === null) {
  message = "Отменено пользователем";
} else {
  totalPrice = request * pricePerDroid;

  if (totalPrice > credits) {
    message = "Недостаточно средств на счету";
  } else {
    rest = credits - totalPrice;
    message = `Вы купили ${request} дроидов, на счету осталось ${rest} кредитов.`;
  }
}
alert(message);

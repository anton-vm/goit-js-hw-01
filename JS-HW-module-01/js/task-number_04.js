const credits = 23580;
const pricePerDroid = 3000;
let message;


const request = prompt("Введите количество дроидов, которые хотите купить");

if (request === null) {
  message = "Отменено пользователем";
} else {
  const totalPrice = request * pricePerDroid;

  if (totalPrice > credits) {
    message = "Недостаточно средств на счету";
  } else {
    
    message = `Вы купили ${request} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
  }
}
alert(message);

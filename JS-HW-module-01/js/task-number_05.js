const country = prompt("Ведите страну визита");

const chinaPrice = 100,
  chiliPrice = 250,
  australiaPrice = 170,
  indiaPrica = 80,
  jamaikaPrice = 130;

if (country === null) {
  alert("Отказ пользователя");
} else {
  switch (country.toLowerCase()) {
    case "китай":
      alert(`Доставка в ${country} будет стоить ${chinaPrice} кредитов`);
      break;

    case "чили":
      alert(`Доставка в ${country} будет стоить ${chiliPrice} кредитов`);
      break;

    case "автралия":
      alert(`Доставка в ${country} будет стоить ${australiaPrice} кредитов`);
      break;

    case "индия":
      alert(`Доставка в ${country} будет стоить ${indiaPrica} кредитов`);
      break;

    case "ямайка":
      alert(`Доставка в ${country} будет стоить ${jamaikaPrice} кредитов`);
      break;

    default:
      alert("Не верная страна");
  }
}

const country = prompt("Ведите страну визита")


let price

if (country === null) {
    alert("Отказ пользователя")
} else {

const countryLow = country.toLowerCase()

switch (countryLow) {
case "китай":
price = 100;
alert(`Доставка в ${country} будет стоить ${price} кредитов`)
break;

case "чили":
price = 250;
alert(`Доставка в ${country} будет стоить ${price} кредитов`)
break;

case "автралия":
price = 170;
alert(`Доставка в ${country} будет стоить ${price} кредитов`)
break;

case "индия":
price = 80;
alert(`Доставка в ${country} будет стоить ${price} кредитов`)
break;

case "ямайка":
price = 130;
alert(`Доставка в ${country} будет стоить ${price} кредитов`)
break;

default: 
alert("Не верная страна")

}
}


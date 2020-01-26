let counterValue = 23;
let value = document.querySelector('#value')

const decBtn = document.querySelector('.decrement')
const incBtn = document.querySelector('.increment')
const counter = document.querySelector(".counter")

function startValue () {
    value.textContent = counterValue;
}

function increment () {
   counterValue += 1
   value.textContent = counterValue;
}

function decrement () {
counterValue -=1
value.textContent = counterValue
}


decBtn.addEventListener('click', decrement)
incBtn.addEventListener('click', increment)

window.addEventListener('DOMContentLoaded', startValue)

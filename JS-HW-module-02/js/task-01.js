"use strict";


function logItems(array) {
let result

  for (let i = 0; i < array.length; i++) {
  result = `${i+1} - ${array[i]}`
console.log(result);
  }

}

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]))

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));



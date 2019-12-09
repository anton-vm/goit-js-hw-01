"use strict"

function calculateEngravingPrice(message, pricePerWord) {

    const stringArray = message.split(' ');

    return stringArray.length * pricePerWord
}

console.log(calculateEngravingPrice("Dobryj dien towarishchi", 10))

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
  
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
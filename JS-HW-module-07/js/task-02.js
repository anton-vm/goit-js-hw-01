const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const food = document.querySelector('#ingredients')

function createLi (text) {
const li = document.createElement('li')
li.textContent = text
return li
}

const menu = ingredients.map(el => createLi(el))
food.append(...menu)




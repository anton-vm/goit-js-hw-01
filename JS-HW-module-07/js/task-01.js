
function quantityOf () {
    console.log(`В списке ${document.querySelector("#categories").children.length} категории`);
}
quantityOf ()


const list = document.querySelector('#categories')

for (let el of [...list.children]) {
    
    console.log(`Категория: ${el.firstElementChild.textContent}`);

    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
}


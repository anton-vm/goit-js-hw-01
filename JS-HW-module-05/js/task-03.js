class Storage {
    constructor(data) {
        this.items = data;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        if (!this.items.includes(item)) {
        this.items.push(item) 
        }
    }
    removeItem(item) {
        let index = this.items.indexOf(item)
        this.items.splice(index, 1)
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

//   console.log(storage);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
 
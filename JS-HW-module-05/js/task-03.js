class Storage {
    constructor() {
        this.items = [];
    }
    getItems() {
        console.log(this.items);
    }
    addItem(item) {
        if (!this.items.includes(item)) {
        this.items.push(item) 
        }
    }
    removeItem(item) {
        if (this.items.includes(item))
        this.items.splice(item)
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

  console.log(storage);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
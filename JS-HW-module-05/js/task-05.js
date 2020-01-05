class Car {
    
    constructor({maxSpeed, speed = 0, isOn, distance = 0, price}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = distance;
    }

    static getSpecs() {
        console.log(this);
    }

    get price () {
        return this._price
    }
    set  price(price) {
        return this._price = price
    }

    turnOn() {
       this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0
    }
    accelerate(value) {
        if ((this.speed + value) <= this.maxSpeed) {
            this.speed +=value
        }
    }
    decelerate(value) {
        if ((this.speed - value) >= 0) {
            this.speed -= value
        }
    }
    drive(hours) {
        if (this.isOn) {
        this.distance += this.speed * hours
        }
    }

}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

console.log(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

 console.log(mustang);
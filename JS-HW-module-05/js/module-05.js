// 26.12.2019

// function Tank(x, y, armor, ammunition, color) {
//   this.hp = 100;
//   this.x = x;
//   this.y = y;
//   this.armor = armor;
//   this.ammunition = ammunition;
//   this.color = color;
//   this.isBroken = false;
//   // this.move = function (x, y) {
//   //     this.x = x;
//   //     this.y = y;
//   // };
//   // this.fire = function () {
//   //     this.ammunition --
//   // };
//   // this.heal = function(extraHp) {
//   //     this.hp += extraHp
//   // };
//   // this.damage = function(damage) {
//   //     this.hp -= damage
//   // }
// }

// Tank.prototype.move = function(x, y) {
//   if (this.canMove()) {
//     this.x = x;
//     this.y = y;
//   }
// };

// Tank.prototype.canFire = function () {
//     return this.ammunition > 0
// };

// Tank.prototype.fire = function(ammunition) {
// if (this.canFire ()) {}
//   this.ammunition--;
// };

// Tank.prototype.canHeal = function (extraHp) {
//     return this.hp < 100
//     // if (this.hp + extraHp <= 100) {
//     //     return true
//     // } else if (this.hp + extraHp > 100 && this.hp < 100) {
//     //     return true
//     // } else {
//     //     return false
//     // }

// }

// Tank.prototype.heal = function(extraHp) {
//     if (this.canHeal()) {
//         if (this.hp + extraHp <= 100) {
//             this.hp += extraHp
//         } else {
//             this.hp = 100
//         }
//     }
// };

// Tank.prototype.canMove = function() {
// if (this.hp <= 0) {
//     this.isBroken = true
//     return false
// } else {
//     return true
// }
// }

// Tank.prototype.damage = function(damage) {
//   this.hp -= damage;
// };

class Tank {
  constructor(x, y, armor, ammunition, color) {
    this.hp = 100;
    this.x = x;
    this.y = y;
    this.armor = armor;
    this.ammunition = ammunition;
    this.color = color;
    this.isBroken = false;

    this.fire = this.fire.bind(this)
  }

  static showInfo () {
      console.log(this);
  }

  move(x, y) {
    if (this.canMove()) {
      this.x = x;
      this.y = y;
    }
  }

  canFire = () => {
    return this.ammunition > 0
  }

  fire = () => {
    {
      if (this.canFire()) {
      }
      this.ammunition--
    }
  }

  get ammunitionProgress() {
    return this.ammunition * 100 / 10
}

set ammunitionProgress (value) {
return this.ammunition = this.ammunition * value / 100
}


}




// function listener (event, cb) {
//     cb();
// }


const player1 = new Tank(0, 0, 50, 10, "red");
// const player2 = new Tank(10, 10, 60, 8, "black");

// listener ('click', player1.fire)

// player1.move(50, 50);
// player1.fire();
// player2.damage(23);

// console.log(player1);
// console.log(player2);

// player1.move(100,100)
// console.log(player1);

console.log(player1);
console.log(player1.ammunitionProgress);
player1.ammunitionProgress =80;
console.log(player1.ammunitionProgress);
console.log(player1);

Tank.showInfo()

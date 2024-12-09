const declareWinner = (fighter1, fighter2, firstAttacker) => {
  let currentAttacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let currentDefender = fighter1.name === firstAttacker ? fighter2 : fighter1;

  while (fighter1.health > 0 && fighter2.health > 0) {
    currentDefender.health -= currentAttacker.damagePerAttack;

    if (currentDefender.health > 0) {
      console.log(
        `${currentAttacker.name} attacks ${currentDefender.name}; ${currentDefender.name} now has ${currentDefender.health} health.`
      );
      winner = currentAttacker.name;
    } else {
      console.log(
        `${currentAttacker.name} attacks ${currentDefender.name}; ${currentDefender.name} now has ${currentDefender.health} and is dead. ${currentAttacker.name} wins.`
      );
      return currentAttacker.name;
    }

    [currentAttacker, currentDefender] = [currentDefender, currentAttacker];
  }
};

class Fighter {
  constructor(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damage;
  }

  toString() {
    return this.name;
  }
}

const lew = new Fighter('Lew', 10, 2);
const harry = new Fighter('Harry', 5, 4);
console.log(declareWinner(lew, harry, 'Lew'));

// const lew = new Fighter('Lew', 10, 2);
// const harry = new Fighter('Harry', 5, 4);
// console.log(harry);
// console.log(lew.name);
// console.log(harry.damagePerAttack);
// lew.health -= 2;
// console.log(lew.health);


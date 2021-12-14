/* Reuse your Animal class
Create a Farm class
it has a list of Animals listOfAnimals
it has a limit that defines how many animals can be kept in the Farm and 
can be set when the Farm is created
it has two methods:
breed() -> creates a new animal if there's place for it
sell() -> removes the least hungry animal */

import { Animal } from './animal';

class Farm {

  public listOfAnimals: Animal [] = [];
  public farmLimit: number = 0;

  constructor (farmLimit: number = 0) {
    this.listOfAnimals = [];
    this.farmLimit = farmLimit;
  }

  breed(newAnimal: Animal): void {
    if (this.listOfAnimals.length < this.farmLimit) {
      this.listOfAnimals.push(newAnimal);
    }
  }

  getListOfAnimals(): Animal [] {
    return this.listOfAnimals;
  }


  sell() {
    for (let i: number = 0; i < this.listOfAnimals.length; i++) {
      let leastHungry = Math.min(this.listOfAnimals[i].getHunger());
      if (this.listOfAnimals[i].getHunger() === leastHungry) {
        this.listOfAnimals.splice(i, 1);
      }
    }
  }
}

let myDog = new Animal();
let myCat = new Animal();
let myHorse = new Animal();
let myDuck = new Animal();

let myFarm = new Farm(4);

myFarm.getListOfAnimals();

myFarm.breed(myDog);
myFarm.breed(myCat);
myFarm.breed(myHorse);
myFarm.breed(myDuck);

console.log(myFarm);

myHorse.eat();
myDog.drink();
myCat.drink();

myFarm.sell();

console.log(myFarm);
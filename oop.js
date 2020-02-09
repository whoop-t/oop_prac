// * Ecapsulation
/* 
Basically, you are scoping code so it will not be accessed by other parts of your code
With Classes, everything inside cannot be accessed by a random global function
*/

// * Inheritance
/*
Inherit from classes to create objects with the properties and methods of class
You can extend as much as you want e.g Animal > Cat > Maine Coon
Maine Coon will have all the properties and methods from Cat as well as Animal
*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  noise() {
    console.log(`${this.name} makes a noise!`);
  }
}

// The cat class is inheriting the name property from the Animal class
// Super is used to call the constructor in the parent class
// Pass in the property to super to be used in the parent constructor
class Cat extends Animal {
  constructor(name, size, age, breed) {
    super(name);
    this.size = size;
    this.age = age;
    this.breed = breed;
  }
  /* 
  If you want to chain methods, you need to return this.
  This is referring to the object itself, in this case the specific cat so then the next method can be called
  */
  // * Polymorphism in js
  /*
  This method is overriding the noise method on Animal
  When the method is called, it will search the prototype chain
  The first instance of the noise method will be called.
 */
  noise() {
    console.log(
      `This ${this.size} cat, is ${this.age} yrs old and named ${this.name}, it lets out a meow!`
    );
    return this;
  }
  scratch(mood) {
    if (mood === 'angry') {
      console.log(`${this.name} is scratching up the damn couch!`);
      return this;
    } else {
      console.log(`${this.name} is scratching its face peacefully!`);
      return this;
    }
  }
  my_breed() {
    console.log(
      `${this.name} is a ${this.breed.breed}, ${this.name} has ${this.breed.fur_length} fur and a ${this.breed.temper} temper `
    );
  }
}

// * Abstraction
/*
  This breed class can be an example of Abstraction in js
  We are seperating out this data from the main class Cat so it is hidden and Cat is more readable
  You can also think of it like a Route in node js from a front-end perspective
  The Front-end dev just wants to know the route works and will do what they expect
  They dont need to know how the back-end developer coded it, that is abstracted away
  This can make code more modular if it needs to be refactored later
*/
class Breed {
  constructor(breed, fur_length, temper) {
    this.breed = breed;
    this.fur_length = fur_length;
    this.temper = temper;
  }
}

const a = new Animal('Random Animal');
const donnie = new Cat(
  'Donnie',
  'medium',
  1.5,
  new Breed('Maine Coon', 'Long', 'Crazy')
);
const kiki = new Cat(
  'Kiki',
  'small',
  7,
  new Breed('Siamese', 'Short', 'Chill')
);

a.noise();
donnie
  .noise()
  .scratch('angry')
  .my_breed();
kiki
  .noise()
  .scratch('happy')
  .my_breed();

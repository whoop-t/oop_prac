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
  constructor(name, size, age) {
    super(name);
    this.size = size;
    this.age = age;
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
      `This ${this.size} cat, is ${this.age} yrs old and named ${this.name}, lets out a meow!`
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
}

const a = new Animal('Random Animal');
const donnie = new Cat('Donnie', 'medium', 1.5);
const kiki = new Cat('Kiki', 'small', 7);
a.noise();
donnie.noise().scratch('angry');
kiki.noise().scratch('happy');

// Ejemplo de libreria "Objetos JavaScript"
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
    console.log(`Hi! I'm ${this.name[0]}.`);
    }
};
// Mi ejemplo de libreria "Objetos JavaScript"
let yo = {
    name:{
        firstName: 'Sebastian',
        secondName: 'Robles'
    },
    age: 19,
    bio: function person() {
    console.log(`${this.name.firstName} is ${this.age} years old.`);
    },
    introduceSelf: function(){
    console.log(`Hi! I'm ${this.name.firstName} and my lastname is ${this.name.secondName}`);
    }
};
//Test your skills: Object basics

// Task 2
let morat = {
    name: 'Morat',
    nationality: 'Mexican',
    genre: 'Pop',
    members:{
        mem1: 'Simon Vargas',
        mem2: 'Martin Vargas',
        mem3: 'Juan Pablo Isaza',
        mem4: 'Juan Pablo Villamil',
        mem5: 'Alejandro Posada'
    },
    formed: 2015,
    split: false,
    albums: [['Sobre el Amor' , 2016] , ['Balas perdidas', 2018] , ['A Donde Vamos?' , 2021]],
    bio: function(){
    console.log(`${this.name} is ${this.nationality} band, your genre is ${this.genre}, they have 7 years actives, these are his albums ${this.albums [0]}, ${this.albums [1]}, ${this.albums [2]}.`); 
    }
};


// Task 3 
let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
}

let cat2 = {
  name : 'Tusa',
  breed : 'American',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}
// Welcome to the PC paradise

alert("Hola, Soy Jarvis y hoy vamos a contruir tu pc.");

// User name

let usr = welcomeUser();

function welcomeUser(){
  let usr;
  usr = prompt('Como te llamas?');
  
  helloHuman(usr);
  
  function helloHuman(name){
    alert('Hola '+ name + ' vamos a configurar tu nueva PC.');
    return name;
  }
  return usr;
}

// Choosing a processor

let name = usr;
alert('Ok, '+ name + ' deberas elegir tu procesador entre Intel o AMD');


let yourCPU;
yourCPU = prompt('Intel Xeon o AMD threadripper');

// Memory RAM
alert('Gran eleccion ' + name + ' , ahora debemos de seleccionar la cantidad de RAM de tu pc.');

let ram;
ram = prompt('32Gb | 64Gb | 128Gb');

//Graphic card 
alert('Bien ' + name + ', por ultimo seleccionaremos tu GPU.');

let yourGPU;
yourGPU = prompt('Nvidia Quadro o AMD Radeon Pro');

// objectPC

let pcArray = [yourCPU,ram,yourGPU];

// alert finalPc configuration


let pcFinalBuild = pcFinalBuildFunction();

function pcFinalBuildFunction(componets){
  alert(`${name} esta es la configuracion de tu pc, como procesador tenemos un ${yourCPU}, como ram tendrias ${ram}Gb y como tarjeta de video tendrias ${yourGPU}.`); 
};

alert(pcFinalBuild);

alert('Gran configuracion para tu PC ' + name + ' espero la disfrutes ;)');
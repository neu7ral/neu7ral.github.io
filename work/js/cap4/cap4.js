function calc() {
    class calculator {
        constructor(calculator){
            this.calculator = calculator;
        }
        sum(num1,num2){
            let sum = num1 + num2;
            return sum;
        }
        res(num1,num2){
            let res = num1 - num2;
            return res;
        }
        mul(num1,num2){
            let mul = num1 * num2;
            return mul;
        }
        div(num1,num2){
            let div = num1 / num2;
            return div;
        }
        expon(num,exp){
            return num**exp;
        }
        sqrt(num){
            return Math.sqrt(num);
        }
        cbrt(num){
            return Math.cbrt(num);
        }
    };

    let casio = new calculator("calculator");

    let oper = parseInt(prompt("Que operacion quieres hacer 1: Sumar, 2: Restar, 3:Multiplicar, 4: Dividir, 5: Potenciar, 6: Raiz cuadrada, 7: Raiz cubica"));

    let numP1 = parseInt(prompt("Ingresa el primer numero:"));
    let numP2 = parseInt(prompt("Ingresa el segundo numero:"));

    if (oper == 1) {
        alert(casio.sum(numP1,numP2));
    } else if (oper == 2){
        alert(casio.res(numP1, numP2))
    } else if (oper == 3) {
        alert(casio.mul(numP1, numP2))
    } else if (oper == 4) {
        alert(casio.div(numP1, numP2))
    } else if (oper == 5) {
        alert(casio.expon(numP1, numP2))
    } else if (oper == 6) {
        alert(casio.sqrt(numP1))
    } else if (oper == 7) {
        alert(casio.cbrt(numP1))
    } else {
        alert("No se encontro la operacion.")
    }
};
//Sofen University
let materiasSofen = document.getElementById("materiasSofen");
    materiasSofen.textContent = "Estas son las materias que se inparte en el primer ano en Sofen: Tecnologias de la informacion, Algoritmos, Construccion de software, Matematicas.";
let listMaterias = [" Tecnologias de la informacion ", " Algoritmos", " Construccion de software ", " Matematicas"];
let listAlumnos = {
        tecnologiasDeLaInformacion: ["Pedro", "Cofla", "Sofia","Atenea"],
        algoritmos: ["Sebastian", "Pedro", "Sofia","Atenea"],
        construccionDeSoftware: ["Sebastian", "Pedro", "Cofla", "Sofia","Atenea"],
        matematicas: ["Sebastian", "Pedro", "Cofla", "Sofia","Atenea"]
    };
let faculCofla = ()=>{
    alert(`Bienvenido a la Facultad Soften,en este ciclo se impartiran estas materias: ${listMaterias}.`)
    alert("Puedes consultar mas informacion escribiendo el nombre de la materia.")

    class materiasFacultad {
        constructor(nombre,profesor,listaAlumnos){
            this.nombre = nombre;
            this.profesor = profesor;
            this.listaAlumnos = listaAlumnos;
        }
        infoMateria(){
            return `
            Nombre de la materia: ${this.nombre}
            Profesor: ${this.profesor}
            Lista de alumnos: ${this.listaAlumnos}
            `
        }
    }
    let materiaPro = prompt(`(Escribe el nombre de la materia para mas info. Materias: ${listMaterias}.)`)
    adpt = materiaPro.toLowerCase();
    materias(adpt);

    function materias(string) {

        mat = new materiasFacultad("Matematicas", "Julio Guerra", listAlumnos.matematicas);
        constSoft = new materiasFacultad("Construccion de Software", "Nate Gentile", listAlumnos.construccionDeSoftware);
        alg = new materiasFacultad("Algoritmos", "Sebastian Camacho", listAlumnos.algoritmos);
        tecInfo = new materiasFacultad("Tecnologias de la informacion", "Pedro Sandoval", listAlumnos.tecnologiasDeLaInformacion);

        if (adpt == "tecnologias de la informacion") {
            alert(tecInfo.infoMateria());
        } else if (adpt == "algoritmos") {
            alert(alg.infoMateria());
        } else if (adpt == "construccion de software") {
            alert(constSoft.infoMateria());
        } else if (adpt == "matematicas") {
            alert(mat.infoMateria());
        } else {
            alert("No existe esa materia en tu ciclo.")
        }
    };
    let infoForAlum = prompt("(Ingresa el nombre del alumno para saber sus clases).");
    adpt2 = infoForAlum.toLowerCase();
        if (adpt2 == "cofla"){
            clasAsisAlum();
        }
    function clasAsisAlum(alumno) {
        let infor = infoMateria();
        let clasesPresentes = [];
        let cantidad = 0;

        for(listaAlumnos in infor) {
            if (infor[listaAlumnos]) {
                cantidad++;
                clasesPresentes.push(" " + listaAlumnos)
            }
        }
        return `${alumno} esta en ${cantidad}. Estas son sus clases: ${clasesPresentes}.`
    }
};
// funciones de botones
// solucion "Cannot read Property addEventListener of Null"
// https://bobbyhadz.com/blog/javascript-cannot-read-property-addeventlistener-null
const buttonCap1 = document.getElementById("capOne");
if (buttonCap1) {
    buttonCap1.addEventListener('click',()=> {
        window.location.href="/work/js/cap1/cap1.html"
    })
};
const buttonCap2 = document.getElementById("capTwo");
if (buttonCap2) {
    buttonCap2.addEventListener('click',()=>{
        window.location.href="/work/js/cap2/cap2.html";
    });
};
const buttonCap3 = document.getElementById("capThree");
if (buttonCap3) {
    buttonCap3.addEventListener('click',()=>{
        window.location.href="/work/js/cap3/cap3.html";
    });
};
const buttonCap4 = document.getElementById("capFour");
if (buttonCap4) {
    buttonCap4.addEventListener('click',()=>{
        window.location.href="/work/js/cap4/cap4.html";
    });
};
const homeEve = document.getElementById("home");
if (homeEve) {
    homeEve.addEventListener('click',()=> {
        window.location.href="/work/js/jsProjects.html";
    });
};


// cosas que programe mientras veia el curs0
// si ingresa la contrasena correcta accede a la img de Atenea.
// function strings() {
//     let adminPass = "12345.%";
//     let password = prompt("Ingresa la contrasena")
    
//     acessForPrivateIg = adminPass.startsWith(password);
    
//     directPrivIg(acessForPrivateIg);

//     function directPrivIg() {
//         if (acessForPrivateIg == true) {
//             let p = document.getElementById("pDiv1");
//             p.textContent = "Te voy revelar un secreto...";
//             window.location.href="https://www.instagram.com/p/CZaG0GoPzcF/?utm_source=ig_web_copy_link";
//         } else {
//             alert("Lo siento no puedes saber que pasa.");
//         };
//     };
// };